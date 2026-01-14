# Deployment Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- GitHub account
- Vercel account

## Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Deploy to Vercel

### Method 1: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Connect your GitHub repository
3. Configure project settings
4. Deploy

### Method 2: Using Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Environment Variables

Set these in Vercel dashboard:

```
NEXT_PUBLIC_ADSENSE_CLIENT_ID=your-adsense-id
```

## Post-Deployment

1. Update domain in settings
2. Configure SSL certificate (automatic)
3. Set up analytics
4. Test all tools
5. Submit sitemap to Google Search Console
6. Monitor Core Web Vitals

## Monitoring

- **Vercel Analytics**: Dashboard monitoring
- **Google Search Console**: SEO tracking
- **Google Analytics**: User behavior
- **Error Tracking**: Sentry (optional)

## Performance Optimization

- Enable Vercel Edge Caching
- Compress assets
- Optimize images
- Minify CSS/JS
- Cache strategy configured in next.config.js

## Troubleshooting

### Build fails
- Check Node.js version
- Clear cache: `rm -rf .next`
- Reinstall: `npm install`

### Deployment timeout
- Split large tools into smaller components
- Enable incremental static regeneration

### SEO not working
- Verify meta tags in page components
- Check robots.txt
- Submit sitemap to Google
- Wait 2-4 weeks for indexing
