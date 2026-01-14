# Toolnest - Free Online Tools Platform

Welcome to Toolnest, a comprehensive collection of 40+ free online tools designed to boost your productivity. Whether you're a developer, content creator, or business professional, Toolnest has the tools you need.

## 🚀 Features

### Text Tools
- **Word Counter** - Real-time word, character, and sentence counting
- **HTML Formatter** - Format and beautify HTML code
- **Markdown to HTML** - Convert markdown syntax to HTML

### Code Tools
- **CSS Minifier** - Reduce CSS file size
- **JavaScript Minifier** - Optimize JavaScript code

### Encoding Tools
- **Base64 Encoder/Decoder** - Encode and decode Base64
- **URL Encoder/Decoder** - Safely encode and decode URLs

### Security Tools
- **UUID Generator** - Generate unique identifiers
- **Hash Generator** - Create SHA and MD5 hashes
- **Password Generator** - Create strong random passwords
- **Regex Tester** - Test and debug regular expressions

### PDF Tools (Coming Soon)
- **PDF Compressor** - Reduce PDF file size
- **PDF Merger** - Combine multiple PDFs
- **PDF Splitter** - Extract pages from PDFs

### Image Tools (Coming Soon)
- **Image Resizer** - Resize images to any dimension
- **Image Converter** - Convert between JPG, PNG, WebP
- **Image to Base64** - Convert images to Base64

### Calculators
- **GST Calculator** - Calculate GST for Indian businesses
- **SIP Calculator** - Calculate mutual fund SIP returns
- **Loan Calculator** - Calculate loan EMI and interest
- **Salary Calculator** - Calculate gross and net salary
- **Simple & Compound Interest** - Financial calculations

### Career Tools
- **Cover Letter Generator** - Create professional cover letters
- **Resume Keyword Checker** - Optimize resumes for ATS
- **Interview Question Generator** - Prepare for interviews

### Utilities
- **QR Code Generator** - Generate scannable QR codes
- **URL Shortener** - Create short URL aliases

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP
- **Database**: None (all client-side processing for privacy)
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd toolnest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy
4. Configure environment variables in Vercel dashboard

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file (for development only):

```
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
```

## 📱 Features

### Dual Theme System
- **Light Theme**: Cream white background for comfortable daytime use
- **Dark Theme**: Textured black for reduced eye strain
- Automatic theme detection based on system preferences
- Persistent theme selection

### SEO Optimization
- Semantic HTML structure
- Meta tags for all pages
- Open Graph support
- Structured data (JSON-LD)
- XML Sitemap
- Robots.txt
- Image optimization
- Fast Core Web Vitals

### Performance
- Code splitting and lazy loading
- Image optimization
- CSS/JS minification
- Caching strategies
- GSAP animations for smooth UX

### Accessibility
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Semantic HTML

## 🎨 Design System

### Color Palette
- **Primary**: Teal accent (#2d7f7f)
- **Neutral**: Cream white and textured black
- **Accent**: Teal for call-to-actions
- **Semantic**: Red for destructive actions

### Typography
- **Headings**: Geist font family
- **Body**: Geist Sans
- **Code**: Geist Mono

### Components
- Reusable button variants (primary, secondary, outline)
- Card components with hover effects
- Input fields with focus states
- Tool cards with tags
- Responsive grid layouts

## 📊 Analytics

The platform supports Google AdSense integration for monetization. Ad placements:
- Between tool categories
- Sidebar on tool pages
- After hero section

## 🔧 Development

### Project Structure
```
toolnest/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   └── tools/
│       ├── word-counter/
│       ├── html-formatter/
│       └── ...
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ToolLayout.jsx
│   └── tools/
│       └── [tool-components]
├── lib/
│   ├── utils.js
│   ├── theme.js
│   └── seo-config.js
└── public/
```

### Adding New Tools

1. Create tool directory: `app/tools/[tool-name]/page.jsx`
2. Create tool component: `components/tools/[ToolName]Tool.jsx`
3. Add metadata and SEO configuration
4. Update main page with tool card
5. Test locally before deployment

## 🔐 Privacy & Security

- **No Data Storage**: All processing is done client-side
- **No User Tracking**: No analytics cookies
- **HTTPS Only**: Secure connections
- **Open Source**: Transparent and auditable code

## 📈 SEO Strategy

- High-traffic keywords targeted (text tools, calculators, PDF tools)
- Long-tail keyword optimization
- Internal linking structure
- Fast page load times
- Mobile-first design
- Semantic HTML
- Schema markup

## 💰 Monetization

- Google AdSense integration
- Strategic ad placements
- Non-intrusive ad layouts
- Premium features (optional future expansion)

## 🐛 Known Issues & Roadmap

### Completed
- ✅ Core tool suite (18 tools)
- ✅ Theme system
- ✅ SEO optimization
- ✅ Responsive design
- ✅ GSAP animations

### In Progress
- 🔄 PDF tools implementation
- 🔄 Image processing tools

### Planned
- ⏳ AI-powered content generation
- ⏳ File upload and processing
- ⏳ User accounts and favorites
- ⏳ API for tool integration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 📞 Support

For support, please open an issue on GitHub or visit our website.

---

Built with ❤️ by the Toolnest Team
