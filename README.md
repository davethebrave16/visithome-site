# VisitHome Landing Page

A modern, responsive landing page for VisitHome - your gateway to comprehensive home solutions.

## Features

- **Modern Design**: Clean, professional design with gradient accents based on the VisitHome logo
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **Performance**: Fast loading with optimized images and code splitting
- **Accessibility**: Built with accessibility best practices

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **Features**: Key benefits and why choose VisitHome
- **Services**: Comprehensive list of services offered
- **About**: Company information and core values
- **Testimonials**: Client reviews and feedback
- **Contact**: Contact form and company information
- **Footer**: Links and additional information

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase Hosting**: Static site deployment

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory.

## Deployment

The project is configured for Firebase Hosting deployment:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

## Project Structure

```
visithome/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.xml/       # Dynamic sitemap
│   └── robots.txt/        # Dynamic robots.txt
├── components/            # React components
│   ├── ui/               # Basic UI components
│   └── sections/         # Page sections
├── public/               # Static assets
├── styles/               # Global styles
└── ...config files
```

## Color Scheme

The color scheme is based on the VisitHome logo gradient:
- Primary: Blue gradient (#667eea to #764ba2)
- Secondary: Purple gradient
- Accent: Orange gradient

## License

© 2024 VisitHome. All rights reserved.
