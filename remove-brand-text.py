from PIL import Image
import os

# Load the image
img_path = r"c:\Users\azureadmin\Desktop\havone\public\images\tech-sensor-exploded.png"
img = Image.open(img_path)

# Get image dimensions
width, height = img.size

# Create a new image to work with
img_array = img.convert('RGBA')

# Get pixel data
pixels = img_array.load()

# The SENTINEL text appears to be on the leftmost part
# We'll scan and remove text-like artifacts from the left side
# Focus on the area where the text is (roughly left 10-15% of image and top area)

left_boundary = int(width * 0.15)  # Scan left 15% of image
top_boundary = int(height * 0.15)  # Scan top 15% of image

# Identify and replace text pixels with background
# For this image with dark background, we'll look for lighter pixels that form text
for y in range(top_boundary):
    for x in range(left_boundary):
        r, g, b, a = pixels[x, y]
        # If pixel is text-like (bright green or light colored on dark background)
        # Replace with darker background
        if g > 150 and (r < 150 or b < 150):  # Green or light pixels
            # Replace with dark background
            pixels[x, y] = (20, 30, 25, 255)
        elif r > 120 and g > 120 and b > 120:  # Light gray/white text
            pixels[x, y] = (20, 30, 25, 255)

# Save the edited image
img_array.convert('RGB').save(img_path)
print(f"Image edited and saved: {img_path}")
