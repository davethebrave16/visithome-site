export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Crawl delay for better server performance
Crawl-delay: 1

# Sitemap location
Sitemap: https://visithome.it/sitemap.xml

# Host directive
Host: https://visithome.it`;
  
  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
