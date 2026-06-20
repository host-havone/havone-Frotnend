import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { imageUrl, filename } = await request.json();

    if (!imageUrl || !filename) {
      return NextResponse.json(
        { error: 'Missing imageUrl or filename' },
        { status: 400 }
      );
    }

    // Handle base64 data URLs
    let imageBuffer: Buffer;

    if (imageUrl.startsWith('data:image')) {
      const base64Data = imageUrl.split(',')[1];
      imageBuffer = Buffer.from(base64Data, 'base64');
    } else {
      // Handle regular URLs
      const response = await fetch(imageUrl);
      const arrayBuffer = await response.arrayBuffer();
      imageBuffer = Buffer.from(arrayBuffer);
    }

    // Save to public/images folder
    const publicPath = path.join(process.cwd(), 'public', 'images', filename);
    await writeFile(publicPath, imageBuffer);

    return NextResponse.json({
      success: true,
      path: `/images/${filename}`,
      message: 'Image saved successfully'
    });

  } catch (error: any) {
    console.error('Error saving image:', error);
    return NextResponse.json(
      { error: 'Failed to save image', details: error.message },
      { status: 500 }
    );
  }
}
