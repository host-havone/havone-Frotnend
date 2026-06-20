# AI Map Image Generation

This project now includes AI-powered map image generation using Azure OpenAI's DALL-E 3 model (GPT-4 Image Generation).

## Features

- **Realistic Navigation UI**: Generates Google Maps-style navigation interfaces with streets, buildings, and routes
- **Smart Caching**: Images are cached in localStorage for 24 hours to reduce API calls
- **Fallback Support**: Automatically falls back to SVG if generation fails
- **Loading States**: Beautiful loading animations while generating
- **Color Themed**: All maps use the website's primary colors (black #000000 and green #8DC313)

## How It Works

### 1. Contact Page Implementation

The contact page now displays an AI-generated map in the left section showing:
- Detailed city streets and buildings
- A green navigation route from point A to B
- Route information (distance, time, traffic)
- Navigation controls (zoom, compass)
- Start and end location markers

### 2. Components

#### `components/MapImage.tsx`
Client component that:
- Checks for cached images (24-hour expiration)
- Calls the API to generate new images
- Handles loading and error states
- Displays the generated or fallback map

#### `app/api/generate-map-image/route.ts`
API endpoint that:
- Accepts POST requests with optional prompt, size, and quality
- Uses Azure OpenAI DALL-E 3 for image generation
- Polls Azure for async image completion
- Returns base64 or URL image data

### 3. Configuration

Required environment variables in `.env.local`:

```env
AZURE_OPENAI_ENDPOINT=https://your-endpoint.openai.azure.com
AZURE_OPENAI_API_KEY=your-api-key
AZURE_OPENAI_IMAGE_DEPLOYMENT=your-deployment-name
AZURE_OPENAI_API_VERSION=2024-02-01
```

## Testing

### Test Page
Visit `/test-map-generation.html` to test the API directly:
1. Open http://localhost:3000/test-map-generation.html
2. Click "Generate Map Image"
3. Wait 15-30 seconds for generation
4. View the generated map

### Manual API Testing

```bash
curl -X POST http://localhost:3000/api/generate-map-image \
  -H "Content-Type: application/json" \
  -d '{
    "size": "1792x1024",
    "quality": "hd"
  }'
```

## Customization

### Custom Prompts

You can customize the map generation by passing a custom prompt:

```javascript
const response = await fetch('/api/generate-map-image', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: "Your custom map description here",
    size: "1792x1024",
    quality: "hd"
  })
});
```

### Supported Sizes
- `1024x1024` (square)
- `1024x1536` (portrait)
- `1536x1024` (landscape)
- `1792x1024` (wide landscape - recommended)

### Quality Options
- `standard`: Faster generation, lower quality
- `hd`: Slower generation, higher quality (recommended)

## Caching Strategy

Images are cached in `localStorage` with a 24-hour expiration to:
- Reduce API costs
- Improve page load times
- Provide consistent experience

To clear the cache:
```javascript
localStorage.removeItem('map-image-url');
localStorage.removeItem('map-image-timestamp');
```

## Fallback Behavior

If image generation fails:
1. Error message is displayed with retry button
2. Automatically falls back to SVG map (`/images/map-ui.svg`)
3. User can click retry to attempt generation again

## Cost Considerations

- DALL-E 3 HD images: ~$0.080 per image
- DALL-E 3 Standard: ~$0.040 per image
- Caching reduces costs significantly
- Consider implementing rate limiting for production

## Development Notes

### Generation Time
- Typical generation: 15-30 seconds
- Polling interval: 2 seconds
- Maximum attempts: 30 (60 seconds timeout)

### Image Format
- Format: PNG
- Returns: Base64 data URL or direct URL
- Recommended size: 1792x1024 for wide displays

### Error Handling
The system handles:
- Missing credentials
- API failures
- Timeout errors
- Invalid responses
- Network issues

## Future Enhancements

Potential improvements:
- Server-side caching with Redis
- Multiple map styles/themes
- Real-time route updates
- Interactive map markers
- User location integration
- Multiple route options

## Troubleshooting

### Image Not Generating
1. Check `.env.local` has all required variables
2. Verify Azure OpenAI deployment is active
3. Check API key permissions
4. Review browser console for errors

### Slow Generation
- Normal: 15-30 seconds for HD quality
- Use `standard` quality for faster results
- Check Azure region latency

### Cache Issues
Clear browser localStorage if seeing stale images:
```javascript
localStorage.clear();
```

## Support

For issues or questions:
1. Check browser console for error messages
2. Test using `/test-map-generation.html`
3. Verify environment configuration
4. Review API logs in Azure portal
