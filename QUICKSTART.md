# Utilities Quick Start Guide

## Getting Started in 5 Minutes

### 1. Download and Extract
Download the ZIP file and extract it to your desired location.

### 2. Install Dependencies
```bash
cd Utilities
npm install
```

### 3. Run Locally
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Push code to GitHub
2. Go to vercel.com/new
3. Connect your GitHub repo
4. Click Deploy

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

## Project Structure

```
app/
  ├── page.jsx              # Home page
  ├── layout.jsx            # Root layout
  ├── globals.css           # Global styles
  └── tools/                # Tool pages
      ├── word-counter/
      ├── html-formatter/
      ├── base64-encoder/
      └── ...

components/
  ├── Navigation.jsx        # Top navigation
  ├── Hero.jsx             # Hero section
  ├── Footer.jsx           # Footer
  ├── ThemeToggle.jsx      # Theme switcher
  ├── Logo.jsx             # Logo component
  └── tools/               # Tool components
      ├── WordCounterTool.jsx
      ├── HTMLFormatterTool.jsx
      └── ...

lib/
  ├── utils.js             # Utility functions
  ├── theme.js             # Theme management
  └── seo-config.js        # SEO configuration

public/
  └── robots.txt           # SEO robots file
```

## Key Features

### Theme Support
- Light: Cream white (#faf9f7)
- Dark: Textured black (#0f0f0f)
- Auto-switches based on system preference
- Persists to localStorage

### Tools Included
- **18 Working Tools** ready to use
- **PDF/Image Tools** scaffolded and ready
- Easy to extend with new tools

### SEO Ready
- Sitemap generation
- Meta tags on all pages
- Open Graph support
- Structured data (JSON-LD)
- Mobile-friendly design

### Performance Optimized
- GSAP animations
- Code splitting
- Image optimization
- CSS/JS minification
- Browser caching

## Customization

### Change Theme Colors
Edit `app/globals.css`:
```css
:root {
  --accent: #2d7f7f;        /* Change accent color */
  --background: #faf9f7;    /* Change background */
  --foreground: #1a1815;    /* Change text color */
}
```

### Add AdSense
Update `app/layout.jsx`:
```jsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ID"
  crossOrigin="anonymous"
/>
```

### Add New Tool
1. Create page: `app/tools/my-tool/page.jsx`
2. Create component: `components/tools/MyToolTool.jsx`
3. Update `app/page.jsx` with tool card
4. Test locally

## SEO Tips

### Before Deploying
- [ ] Update meta tags with real description
- [ ] Add AdSense client ID
- [ ] Replace placeholder images
- [ ] Test all tools work correctly
- [ ] Check mobile responsiveness

### After Deploying
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Check indexing status
- [ ] Submit to Bing Webmaster

## Important Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration & SEO |
| `app/globals.css` | Theme & global styles |
| `app/layout.jsx` | Root layout & meta tags |
| `app/sitemap.js` | XML sitemap generation |
| `app/robots.js` | SEO robots configuration |

## Troubleshooting

**Tools not loading?**
- Clear cache: `rm -rf .next`
- Reinstall: `npm install`
- Restart dev server

**Styles not applying?**
- Clear browser cache
- Check Tailwind configuration
- Verify CSS imports

**Not ranking on Google?**
- Wait 2-4 weeks for indexing
- Submit sitemap in Google Search Console
- Check for crawl errors
- Improve content & backlinks

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run linter
```

## Support

- GitHub Issues: Report bugs
- Documentation: See README.md
- Deployment: See DEPLOYMENT.md

## Next Steps

1. **Customize**: Update branding and colors
2. **Content**: Write tool descriptions
3. **SEO**: Set up analytics and webmaster tools
4. **Monetization**: Add AdSense code
5. **Promotion**: Market your tools

---

Happy building! 🚀
