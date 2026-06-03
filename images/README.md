# Images Directory

This directory contains all image assets for the Shree Ram Super Speciality Hospital Admin Dashboard.

## Required Images

### Logo Files
- `logo.png` - Main hospital logo for login page (120x120px)
- `logo-small.png` - Smaller logo for sidebar (50x50px)

### User Avatar
- `avatar.jpg` - User profile avatar (40x40px)

### Blog Thumbnail Images
- `blog-1.jpg` - Blog thumbnail image (600x400px)
- `blog-2.jpg` - Blog thumbnail image (600x400px)
- `blog-3.jpg` - Blog thumbnail image (600x400px)
- `blog-4.jpg` - Blog thumbnail image (600x400px)
- `blog-5.jpg` - Blog thumbnail image (600x400px)

## Placeholder Images

You can generate placeholder images using these online services:
- [Placeholder.com](https://placeholder.com/) - Simple placeholder images
- [Lorem Picsum](https://picsum.photos/) - Random images
- [Placeholder.jp](https://placehold.jp/) - Japanese placeholder service

### Quick Placeholder URLs

For testing, you can use these temporary URLs:

**Logo:**
```
https://placeholder.com/120x120?text=Shree+Ram+Logo
```

**Avatar:**
```
https://placeholder.com/40x40?text=Admin
```

**Blog Images:**
```
https://picsum.photos/600/400?random=1
https://picsum.photos/600/400?random=2
https://picsum.photos/600/400?random=3
https://picsum.photos/600/400?random=4
https://picsum.photos/600/400?random=5
```

## How to Add Images

### Method 1: Manual Download
1. Download placeholder images from above services
2. Save them with the appropriate filenames in this directory
3. Update image src attributes in HTML files if needed

### Method 2: Using Data URIs
For development, you can use data URIs (base64 encoded images) directly in HTML.

### Method 3: CDN/External Links
Replace local image paths with CDN URLs in your HTML files.

## Hospital Branding

For production use, provide:
1. Official Shree Ram Super Speciality Hospital logo
2. Hospital color scheme (currently using: #8B1F1F, #FF6B35)
3. Hospital mascot/icon if available
4. Staff profile pictures for avatars

## Image Specifications

| Image | Size | Format | Purpose |
|-------|------|--------|---------|
| logo.png | 120x120px | PNG | Login page main logo |
| logo-small.png | 50x50px | PNG | Sidebar branding |
| avatar.jpg | 40x40px | JPG | User profile |
| blog-*.jpg | 600x400px | JPG | Blog thumbnails |

## Notes

- All PNG images should have transparent backgrounds
- JPG images should be optimized for web (quality: 80%)
- Recommended compression tools: TinyPNG, ImageOptim
- Ensure all images are accessible and properly licensed
