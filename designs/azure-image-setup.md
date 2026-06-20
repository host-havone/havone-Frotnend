# Azure AI Foundry Image Setup

This project generates website visuals through the server route:

```text
POST /api/generate-image
```

The browser should never call Azure directly. Keep the Azure endpoint and key only in `.env.local`.

## Environment Variables

Create `.env.local` in the project root:

```text
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com
AZURE_OPENAI_API_KEY=your-azure-openai-key
AZURE_OPENAI_IMAGE_DEPLOYMENT=gpt-image-1
AZURE_OPENAI_API_VERSION=2025-04-01-preview
```

Use the deployment name from Azure AI Foundry, not just the model family name, unless you named the deployment the same thing.

## Request Shape

```json
{
  "prompt": "Final design prompt goes here",
  "size": "1536x1024",
  "quality": "high"
}
```

The route returns:

```json
{
  "provider": "azure-openai",
  "deployment": "gpt-image-1",
  "image": "data:image/png;base64,...",
  "revisedPrompt": "..."
}
```

## Workflow

1. I define the visual idea and final prompt in `designs/image-generation-prompts.md`.
2. You select the page/section asset to generate.
3. The app calls `/api/generate-image` with that final prompt.
4. The returned base64 image can be saved into `public/generated/` and used with `next/image`.

