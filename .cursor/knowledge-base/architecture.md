# Next.js Architecture for an SEO-Oriented Landing Page

**Next.js Version:** 13+ (App Router enabled, TypeScript, ESLint, TailwindCSS)

---

## Overview

This architecture is designed for building high-performance static websites and landing pages with Next.js, emphasizing maximum search engine optimization (SEO) and deployment via Firebase Hosting.

The framework leverages **Static Site Generation (SSG)** to produce plain HTML files for every page at build time. This approach ensures minimal loading times and makes the content immediately crawlable for search engines, leading to superior indexability and SEO ranking.

---

## Project Structure

The structure is simplified for a landing page but remains scalable for additional pages (e.g., "About Us," "Contact").

```plaintext
landing-page-project/  # Project Root
│
├── app/                 # App Router (pages, layouts, server components)
│   ├── layout.tsx       # Root layout (shared UI, global metadata)
│   ├── page.tsx         # Main home page
│   ├── sitemap.xml/     # Dynamic sitemap generation
│   │   └── route.ts
│   ├── robots.txt/      # Dynamic robots.txt generation
│   │   └── route.ts
│   └── [slug]/          # Additional pages (e.g., /about-us)
│       └── page.tsx
│
├── components/          # Reusable UI components
│   ├── ui/              # Basic elements (buttons, cards, etc.)
│   └── sections/        # Page sections (Hero, Features, Contact)
│
├── lib/                 # Shared libraries (utils, configs)
│   └── cms.ts           # Functions to fetch data from a Headless CMS (optional)
│
├── hooks/               # Custom React hooks
│
├── styles/              # Global styles and CSS modules
│   └── globals.css      # TailwindCSS base styles
│
├── public/              # Static assets (images, fonts, favicon)
│
├── .env.local           # Local environment variables
├── next.config.mjs      # Next.js configuration (with static output)
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # TailwindCSS configuration
├── firebase.json        # Firebase Hosting configuration
├── .firebaserc          # Firebase project configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

This architecture is optimized for **SSG, SEO, and deployment on Firebase Hosting**.

---

## Core Concepts

### App Router for Static Site Generation (SSG)

- **Static First**: By default, the App Router generates static HTML, which is perfect for SEO.  
- **Server Components (Default)**: Fetch data at build time (e.g., from a Headless CMS) without sending unnecessary JavaScript to the client.  
- **Client Components**: Marked with `'use client'` only when browser interactivity is required (e.g., a contact form).  

---

### SEO Optimization

- **Metadata API**: Manage title, description, keywords, and Open Graph tags via `generateMetadata`.  
- **Sitemap & Robots.txt**: Dynamically generated for crawler instructions.  
- **Structured Data (JSON-LD)**: For enhanced visibility (rich snippets).  

---

### Styling

- **TailwindCSS**: Utility-first development.  
- **CSS Modules**: Optional for component-scoped styles.  

---

### Data Management

- Content may be static or managed via a **Headless CMS** (Contentful, Sanity, Strapi).  
- Data fetching occurs **at build time** with `fetch` inside Server Components.  

---

## SEO Best Practices

### 1. Optimized Metadata

```tsx
// app/[slug]/page.tsx
import { Metadata } from 'next'

// Function to fetch metadata (e.g., from a CMS)
async function getPageData(slug: string) {
  return {
    title: `Page Title | ${slug}`,
    description: 'An SEO-specific description for this page.',
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getPageData(params.slug)

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: ['/og-image.png'],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Page: {params.slug}</h1>
}
```

---

### 2. Sitemap and Robots.txt Generation

```ts
// app/sitemap.xml/route.ts
export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.yourwebsite.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>https://www.yourwebsite.com/about-us</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>`;
  
  return new Response(sitemap, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
```

---

### 3. Performance

- Use `<Image>` for automatic image optimization.  
- Use `next/font` for efficient font loading (avoiding layout shifts).  

---

## Deployment on Firebase Hosting

To deploy a static Next.js site to Firebase, the project must be configured to export **HTML/CSS/JS files**.

---

### 1. Initial Firebase Setup

```bash
# Run this command in the project root
firebase init hosting
```

During setup:

- Select an existing Firebase project or create a new one.  
- Set public directory to **out**.  
- Configure as a single-page app: **No**.  

This will create `firebase.json` and `.firebaserc`.  

Example **firebase.json**:

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

---

### 2. Configuring Next.js for Static Export

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Disable runtime optimization if needed
  },
};

export default nextConfig;
```

---

### 3. Deployment Workflow

**Local Development:**

```bash
npm run dev
```

**Build for Production:**

```bash
npm run build
```

This generates the `out/` folder with all static files.

**Deploy to Firebase:**

```bash
firebase deploy --only hosting
```
