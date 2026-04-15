# Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build for Production

```bash
npm run build
# Output in ./dist folder
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Option 2: Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Cloudflare Pages

1. Connect GitHub repository
2. Build command: `npm run build`
3. Build output: `dist`

## Environment Variables

Create `.env` file for local development:

```env
# Analytics (optional)
PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
SITE_URL=https://yourdomain.com
```

## Custom Domain Setup

1. Purchase domain (Namecheap, Cloudflare, etc.)
2. Add to Vercel/Netlify project settings
3. Update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test affiliate links work
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google AdSense (after traffic grows)
- [ ] Configure social media accounts

## SEO Setup

### Google Search Console

1. Add site property
2. Verify ownership (DNS or file upload)
3. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

### Generate Sitemap

Add to `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://yourdomain.com'
});
```

## Monitoring

- **Uptime**: Use UptimeRobot (free)
- **Analytics**: Google Analytics 4
- **Errors**: Sentry (optional)

---
*Update this guide as you add more features*
