export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://visithome.it/sitemap.xml`;
  
  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
