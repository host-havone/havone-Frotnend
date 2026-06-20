import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;

    if (!endpoint || !apiKey) {
      return NextResponse.json(
        { error: 'Missing Azure OpenAI credentials in .env.local' },
        { status: 500 }
      );
    }

    const prompt = `Realistic interior view from a modern autonomous truck driver's seat, futuristic dashboard with digital displays and heads-up display (HUD), advanced sensors visible through windshield, professional automotive photography, cinematic lighting, high-tech cockpit with glowing blue and green interface elements, wide angle view through windshield showing highway road ahead, dramatic sunset lighting, 8K ultra detailed, photorealistic, commercial vehicle interior`;

    console.log('🎨 Generating image with Azure OpenAI...');
    console.log('📍 Endpoint:', endpoint);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "1792x1024",
        quality: "standard",
        style: "natural"
      }),
    });

    console.log('📡 Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Azure Error Response:', errorText);
      console.error('❌ Status Code:', response.status);

      let errorDetails;
      try {
        errorDetails = JSON.parse(errorText);
      } catch {
        errorDetails = errorText;
      }

      return NextResponse.json(
        {
          error: 'Azure OpenAI API error',
          details: errorDetails,
          statusCode: response.status,
          endpoint: endpoint,
          message: 'Check the details field for more information'
        },
        { status: 200 } // Return 200 so we can see the error details in UI
      );
    }

    const data = await response.json();
    console.log('✅ Image generated successfully');

    // The response should contain the image URL or base64 data
    const imageUrl = data.data?.[0]?.url || data.data?.[0]?.b64_json;

    if (!imageUrl) {
      console.error('❌ No image in response:', data);
      return NextResponse.json(
        { error: 'No image data in response', details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      image: imageUrl.startsWith('data:') ? imageUrl : imageUrl,
      provider: 'azure-openai',
      revisedPrompt: data.data?.[0]?.revised_prompt
    });

  } catch (error: any) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
