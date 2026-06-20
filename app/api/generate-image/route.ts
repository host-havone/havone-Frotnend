import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ImageRequest = {
  prompt?: string;
  size?: "1024x1024" | "1024x1536" | "1536x1024" | "auto";
  quality?: "low" | "medium" | "high" | "auto";
};

const AZURE_OPENAI_API_VERSION =
  process.env.AZURE_OPENAI_API_VERSION || "2025-04-01-preview";

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
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return NextResponse.json({ error: "A prompt is required." }, { status: 400 });
  }

  const response = await fetch(azureImageUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.AZURE_OPENAI_API_KEY,
    },
    body: JSON.stringify({
      prompt,
      size: body.size || "1536x1024",
      quality: body.quality || "high",
      n: 1,
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

    const result = await pollAzureOperation(operationUrl);
    const image = result?.data?.[0] || result?.result?.data?.[0];

    return NextResponse.json({
      provider: "azure-openai",
      deployment: process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT,
      image: image?.b64_json ? `data:image/png;base64,${image.b64_json}` : image?.url,
      revisedPrompt: image?.revised_prompt,
    });
  }

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: data?.error?.message || "Azure image generation failed." },
      { status: response.status }
    );
  }

  const image = data?.data?.[0];

  return NextResponse.json({
    provider: "azure-openai",
    deployment: process.env.AZURE_OPENAI_IMAGE_DEPLOYMENT,
    image: image?.b64_json ? `data:image/png;base64,${image.b64_json}` : image?.url,
    revisedPrompt: image?.revised_prompt,
  });
}
