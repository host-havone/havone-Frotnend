# Generate India Map Image

This guide will help you generate a professional India map image with states color-coded by road accident severity.

## 🎯 Quick Start (Web Interface - RECOMMENDED)

### Step 1: Open the Generator
Open your browser and navigate to:
```
http://localhost:3000/generate-india-map.html
```

### Step 2: Generate the Map
1. Click the **"Generate India Map"** button
2. Wait 20-40 seconds while AI generates the image
3. You'll see a success message when complete

### Step 3: Save the Image
**Option A (Automatic - If you see download link):**
- Click the "Download Image" link below the generated map

**Option B (Manual - Recommended):**
1. Right-click on the generated image
2. Select "Save Image As..."
3. Save it as: `public/images/india-map-generated.png`

### Step 4: Update the Component
Once saved, update the RoadAccidentMap component to use the new image:

```tsx
<img
  src="/images/india-map-generated.png"
  alt="India Map with Road Accident Statistics"
  className="w-full h-auto"
  style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.05))" }}
/>
```

## 📋 What You'll Get

The AI will generate a professional map featuring:

### ✅ Color Coding
- **🔴 RED (Critical)**: Uttar Pradesh, Tamil Nadu, Maharashtra, Karnataka, Madhya Pradesh
- **🟠 ORANGE (High)**: Rajasthan, West Bengal, Andhra Pradesh, Gujarat  
- **🟡 AMBER (Medium)**: Bihar, Telangana, Punjab, Haryana, Odisha
- **🟢 GREEN (Low)**: Kerala
- **⚪ GRAY**: All other states

### ✅ Design Features
- Clean white/light gray background
- Clear state boundaries
- Professional cartographic style
- Legend showing severity levels
- High resolution (1792x1024)
- HD quality

## 🛠️ Alternative Methods

### Method 2: Use Test Page (Similar to above)
```
http://localhost:3000/test-map-generation.html
```

### Method 3: Direct API Call (For Developers)
```bash
curl -X POST http://localhost:3000/api/generate-map-image \
  -H "Content-Type: application/json" \
  -d '{
    "size": "1792x1024",
    "quality": "hd"
  }'
```

## 🎨 Customizing the Prompt

If you want to customize the map generation, edit the prompt in:
- **`public/generate-india-map.html`** (lines ~40-60)
- Or modify the API route at **`app/api/generate-map-image/route.ts`**

You can change:
- Colors for different severity levels
- Background color
- Legend position
- Map style (minimalist, detailed, etc.)
- State labels (on/off)

## 💡 Tips

1. **Wait patiently**: AI generation takes 20-40 seconds
2. **HD Quality**: Using "hd" quality gives better results but takes longer
3. **Size**: 1792x1024 is optimal for wide displays
4. **Retry if needed**: If the result isn't perfect, click generate again
5. **Cache**: The image may be cached, clear browser cache if you need to regenerate

## ⚠️ Troubleshooting

### Issue: "Access denied" or API error
**Solution**: Check your `.env.local` file has valid Azure OpenAI credentials

### Issue: Image doesn't match expected colors
**Solution**: 
- The AI interprets prompts creatively
- Try generating 2-3 times to get the best result
- Adjust the prompt to be more specific about colors

### Issue: Map is low quality
**Solution**: Ensure you're using `quality: "hd"` in the generation request

### Issue: Some states are missing
**Solution**: The AI may simplify. Generate multiple times or use the SVG fallback

## 📁 File Locations

- **Generated Image**: `public/images/india-map-generated.png`
- **Fallback SVG**: `public/images/india-map.svg`
- **Component**: `components/home/RoadAccidentMap.tsx`
- **Generator Page**: `public/generate-india-map.html`
- **API Route**: `app/api/generate-map-image/route.ts`

## 🚀 After Generation

Once you have your generated map:

1. **View it**: Open `http://localhost:3000/images/india-map-generated.png`
2. **Use it**: Update the component to use the new image
3. **Test**: Visit `http://localhost:3000` to see it on the home page
4. **Optimize**: If needed, compress the PNG for faster loading

## 📊 Expected File Size

- **HD Quality**: ~1-2 MB
- **Standard Quality**: ~500 KB - 1 MB
- **Compressed**: ~200-500 KB (after optimization)

## 🎯 Quick Command Summary

```bash
# Start dev server (if not running)
npm run dev

# Open generator in browser
open http://localhost:3000/generate-india-map.html

# After generation, verify the file exists
ls -lh public/images/india-map-generated.png
```

---

**Need Help?** Check the browser console for detailed error messages if generation fails.
