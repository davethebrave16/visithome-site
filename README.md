# VisitHome - The Open House Experience 3.0

A modern landing page for VisitHome, the app that digitizes and simplifies every Open House for real estate agencies and home seekers.

## 🚀 Key Features

- **Modern Design**: Clean, professional interface with gradients based on the VisitHome logo
- **Fully Responsive**: Optimized for all devices with fixed header on mobile
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **Performance**: Fast loading with optimized images and code splitting
- **Accessibility**: Built following accessibility best practices
- **Multilingual**: Italian content with localization support

## 📱 Site Sections

### Homepage (`/`)
- **Header**: Sticky navigation with hamburger menu for mobile
- **Hero**: Eye-catching introduction with app mockup and CTAs
- **Features**: Dashboard mockup and key features
- **For Buyers**: Section dedicated to end customers
- **For Agents**: Section dedicated to real estate agencies
- **Vision**: VisitHome's story and mission
- **CTA**: Final call-to-action
- **Footer**: Navigation links and information

### Dedicated Pages
- **Agents** (`/agents`): Portal for real estate agencies
- **Download** (`/download`): App download page
- **Privacy** (`/privacy`): Privacy policy
- **Delete** (`/delete`): Data deletion request

## 🛠 Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase Hosting**: Static site deployment
- **SEO**: Optimized metadata, sitemap.xml, robots.txt

## 🎨 Design System

### Brand Colors
- **Primary**: `#003249` (Dark blue)
- **Secondary**: `#007EA7` (Medium blue)
- **Accent**: `#7DCED7` (Turquoise)
- **Dark**: `#181A1A` (Black)

### Gradients
- **Logo**: `linear-gradient(90deg, #7DCED7 0%, #007EA7 60%, #003249 100%)`
- **Hero Text**: `linear-gradient(90deg, #7DCED7, #007EA7)`
- **Background**: `linear-gradient(180deg, #003249 0%, #181A1A 40%, #003249 100%)`

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Production Build

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Static files will be generated in the `out` directory**.

## 🌐 Deployment

The project is configured for Firebase Hosting deployment:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy to Firebase**:
   ```bash
   firebase deploy --only hosting
   ```

## 📁 Project Structure

```
visithome/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── agents/            # Agents page
│   ├── download/          # App download page
│   ├── privacy/           # Privacy page
│   ├── delete/            # Data deletion page
│   ├── sitemap.xml/       # Dynamic sitemap
│   └── robots.txt/        # Dynamic robots.txt
├── components/            # React components
│   ├── ui/               # Basic UI components
│   └── sections/         # Page sections
│       ├── Header.tsx    # Header with mobile menu
│       ├── Hero.tsx      # Hero section
│       ├── Features.tsx  # Features section
│       ├── Services.tsx  # Services (Buyers/Agents)
│       ├── About.tsx     # Vision section
│       ├── Contact.tsx   # Final CTA
│       └── Footer.tsx    # Footer
├── styles/               # Global styles
│   └── globals.css       # CSS with brand variables
├── public/               # Static assets
└── ...config files       # Configuration files
```

## 📱 Responsive Design

- **Mobile First**: Design optimized for mobile devices
- **Fixed Header**: Header always visible on mobile
- **Hamburger Menu**: Mobile navigation with smooth animations
- **Breakpoints**: 
  - Mobile: `< 768px`
  - Desktop: `≥ 768px`

## 🔍 SEO & Performance

- **Optimized Metadata**: Title, description, keywords in Italian
- **Open Graph**: Social media tags
- **Twitter Cards**: Twitter optimization
- **XML Sitemap**: Site map for search engines
- **Robots.txt**: Crawler rules
- **Hreflang**: Multilingual support
- **Performance**: Lazy loading, code splitting, image optimization

## 🎯 Key Features

### For Home Seekers
- Discover nearby Open House events
- Quick booking without phone calls
- Digital check-in without queues
- App available on iOS, Android, and Web

### For Real Estate Agencies
- Automated event management
- Qualified leads in CRM
- Performance dashboard
- Integration with existing tools

## 📞 Contact

- **Support Email**: customersupport@visithome.it
- **Privacy Email**: privacy@visithome.it
- **Web App**: https://app.visithome.it
- **Agent Portal**: https://agency.visithome.it

## 📄 License

© 2024 VisitHome. All rights reserved.

---

**VisitHome** - The Open House Experience 3.0 | Transform the way you experience real estate