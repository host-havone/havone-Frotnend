import { NextResponse } from 'next/server';

export const runtime = "nodejs";

type ImageRequest = {
  prompt?: string;
  size?: "1024x1024" | "1024x1536" | "1536x1024" | "1792x1024";
  quality?: "standard" | "hd";
};

const AZURE_OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION || "2024-02-01";

function getAzureImageUrl() {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT?.replace(/\/$/, "");
  const deployment = process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT;

  if (!endpoint || !deployment) {
    return null;
  }

  return `${endpoint}/openai/deployments/${deployment}/images/generations?api-version=${AZURE_OPENAI_API_VERSION}`;
}

async function pollAzureOperation(operationUrl: string) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(operationUrl, {
      headers: {
        "api-key": process.env.AZURE_OPENAI_API_KEY || "",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || "Azure image operation polling failed.");
    }

    if (data.status === "succeeded") {
      return data.result || data;
    }

    if (data.status === "failed" || data.status === "cancelled") {
      throw new Error(data?.error?.message || `Azure image operation ${data.status}.`);
    }
  }

  throw new Error("Azure image generation timed out while polling.");
}

export async function POST(request: Request) {
  const azureImageUrl = getAzureImageUrl();

  if (!process.env.AZURE_OPENAI_API_KEY || !azureImageUrl) {
    return NextResponse.json(
      {
        error:
          "Azure image generation is not configured. Set AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, and AZURE_OPENAI_IMAGE_DEPLOYMENT.",
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as ImageRequest;

  // Default prompt for realistic Google Maps-style navigation UI
  const prompt = body.prompt?.trim() || `A realistic Google Maps style navigation interface showing a city map with detailed streets, buildings, and a green navigation route from point A to point B. The map should include:
- Detailed city streets in white/light gray on a light background
- Gray buildings with realistic shadows and windows
- Green parks and blue water features
- A bold bright green (#8DC313) navigation route line connecting two points
- Green circular markers labeled "A" (start) and "B" (destination)
- A white card overlay in the top-left showing "Route Overview" with start and end addresses
- Bottom navigation bar with distance (2.4 km), estimated time (8 min), and a green "Start Navigation" button
- Zoom controls on the right side
- Professional, clean, modern UI design
- Realistic city layout with intersections and multiple streets
- Similar to Google Maps or Apple Maps navigation view
- The color scheme should use bright green (#8DC313) for all navigation elements, routes, and buttons
- High quality, photorealistic style`;

  console.log('🗺️ Generating map image with Azure OpenAI...');

  const response = await fetch(azureImageUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.AZURE_OPENAI_API_KEY,
    },
    body: JSON.stringify({
      prompt,
      size: body.size || "1792x1024",
      quality: body.quality || "hd",
      n: 1,
      style: "natural"
    }),
  });

  if (response.status === 202) {
    const operationUrl = response.headers.get("operation-location");

    if (!operationUrl) {
      return NextResponse.json(
        { error: "Azure accepted the request but did not return an operation-location header." },
        { status: 502 }
      );
    }

    console.log('⏳ Polling Azure operation...');
    const result = await pollAzureOperation(operationUrl);
    const image = result?.data?.[0] || result?.result?.data?.[0];

    console.log('✅ Map image generated successfully');

    return NextResponse.json({
      success: true,
      provider: "azure-openai-dalle3",
      deployment: process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT,
      image: image?.b64_json ? `data:image/png;base64,${image.b64_json}` : image?.url,
      revisedPrompt: image?.revised_prompt,
    });
  }

  const data = await response.json();

  if (!response.ok) {
    console.error('❌ Azure Error:', data?.error?.message);
    return NextResponse.json(
      { error: data?.error?.message || "Azure image generation failed." },
      { status: response.status }
    );
  }

  const image = data?.data?.[0];

  console.log('✅ Map image generated successfully');

  return NextResponse.json({
    success: true,
    provider: "azure-openai-dalle3",
    deployment: process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT,
    image: image?.b64_json ? `data:image/png;base64,${image.b64_json}` : image?.url,
    revisedPrompt: image?.revised_prompt,
  });
}

export async function GET() {
  return NextResponse.json({
    message: "Map image generation endpoint. Use POST with optional 'prompt', 'size', and 'quality' parameters.",
  });
}
