# David Nekovář - CV Website 🚀

A modern, responsive CV website built with React, TypeScript, and Tailwind CSS, showcasing David Nekovář's professional experience as a Full Stack Developer and Product Owner. Features a beautiful animated background, dark/light theme support, and professional print-to-PDF functionality.

## ✨ Features

- **Modern Design**: Elegant design with animated background and luxury card components
- **Theme Support**: Light/dark/system theme toggle with persistent preferences
- **Responsive Layout**: Fully optimized for all screen sizes (mobile, tablet, desktop, large screens)
- **Interactive Sections**: Smooth scrolling navigation with animated transitions
- **Professional Timeline**: Detailed experience section with visual timeline and company highlights
- **Skills Showcase**: Comprehensive display of technical skills, languages, and personal values
- **Print-Optimized**: Professional PDF generation with print-specific styling and instructions
- **Contact Integration**: Direct links to email, phone, LinkedIn, and project portfolios
- **Performance Optimized**: Built with Vite, lazy loading, and modern React patterns
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + React Router
- **Styling**: Tailwind CSS + shadcn/ui components + Custom CSS animations
- **Build Tool**: Vite with SWC for fast compilation
- **State Management**: React Context (Theme) + TanStack Query
- **Icons**: Lucide React (tree-shaken for performance)
- **UI Components**: Radix UI primitives with custom styling
- **Server**: Express.js for production hosting
- **Deployment**: Heroku-ready with Node.js buildpack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

```bash
# Clone or navigate to the project
cd DavidNekovar.cz

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
bun dev
```

### Building for Production

```bash
# Build the project
npm run build
# or
yarn build
# or
bun run build

# Preview the build locally
npm run preview
# or
yarn preview
# or
bun run preview

# Start production server (for Heroku deployment)
npm start
```

### Development Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Development build (for testing)
npm run build:dev

# Lint code
npm run lint

# Production server
npm start
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Screens**: 1400px+

## 🎨 Design System

The design follows an elegant, professional aesthetic with modern UI patterns:

- **Theme Support**: Light/Dark/System themes with smooth transitions
- **Color Palette**: CSS custom properties with theme-aware colors
  - Primary: Pink accent (#E91E63) - Brand signature
  - Secondary: Ocean Blue (#0891B2) - Professional accent  
  - Accent: Gold (#F59E0B) - Luxury highlights
- **Typography**: System fonts with fallbacks for optimal performance
- **Animations**: 
  - Smooth fade-in and slide-up effects
  - Animated background with floating shapes
  - Hover transitions and micro-interactions
  - Reduced motion support for accessibility
- **Components**: Luxury card design with subtle shadows and borders

## 📄 Website Sections

1. **CV Header**: Fixed navigation with theme toggle and smooth scroll links
2. **Hero Section**: Introduction with professional highlights, key stats, and core technologies
3. **Experience**: Detailed professional timeline with company highlights and achievements
4. **Skills**: Comprehensive showcase of:
   - Technical skills with proficiency levels
   - Programming languages and frameworks
   - Personal values and soft skills
   - Language proficiencies
5. **Contact**: Multiple contact methods with direct links and project portfolio
6. **CV Footer**: Professional footer with copyright and additional links

## 🖨️ Print Features

- **Print-Optimized Layout**: Special styling for PDF generation
- **Professional Headers**: Contact information automatically included in print version
- **Clean Typography**: Optimized font sizes and spacing for A4 format
- **Print Instructions**: Built-in guidance for optimal PDF generation
- **Browser Print Support**: Works with all modern browsers' print-to-PDF functionality

## 🌐 Deployment

### Current Deployment: Heroku

The website is currently deployed on Heroku with:
- **Production URL**: https://davidnekovar.herokuapp.com
- **Runtime**: Node.js with Express server
- **Build Process**: Automatic build on push with `postinstall` script
- **Static Serving**: Express serves built assets from `dist/` folder

### Alternative Deployment Options

- **Vercel**: `vercel --prod` (supports both static and SSR)
- **Netlify**: Drag & drop the `dist` folder or connect GitHub repo
- **GitHub Pages**: Use GitHub Actions with the build output
- **Any Static Host**: Upload the `dist` folder contents after `npm run build`

### Deployment Configuration

```javascript
// server.js - Production Express server
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
```

## 📞 Contact David

- **Email**: [nekovar.david@gmail.com](mailto:nekovar.david@gmail.com)
- **Phone**: [+420 728 234 648](https://signal.me/#eu/+420728234648) (Signal preferred)
- **LinkedIn**: [dave-nekovar](https://www.linkedin.com/in/dave-nekovar/)
- **Location**: Prague, Czech Republic
- **Website**: [davidnekovar.cz](https://davidnekovar.herokuapp.com)

## 🚀 Project Portfolio

- **Smarlify**: [smarlify.co](https://www.smarlify.co) - Financial wellness platform
- **Improvee**: [app.improvee.io](https://app.improvee.io/onboarding) - Personal development app
- **Koinly**: Crypto tax software (affiliate partner)

## 🎯 Personal Philosophy

*"Live smarter, invest wiser, be free"*

## 📋 Development Status

This project is actively maintained and production-ready. See [TODOs.md](./TODOs.md) for planned enhancements including:
- Single-page print layout optimization
- Enhanced SEO and analytics
- Performance improvements
- Accessibility enhancements

---

Built with ❤️ by David Nekovář | © 2025 All rights reserved
