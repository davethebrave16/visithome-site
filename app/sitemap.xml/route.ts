export async function GET() {
  const baseUrl = 'https://visithome.it';
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      
      <!-- Homepage -->
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel="alternate" hreflang="it" href="${baseUrl}" />
        <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
      </url>
      
      <!-- Main page sections -->
      <url>
        <loc>${baseUrl}/#features</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${baseUrl}/#buyers</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${baseUrl}/#agents</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${baseUrl}/#about</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <!-- Dedicated pages -->
      <url>
        <loc>${baseUrl}/agents</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      
      <url>
        <loc>${baseUrl}/download</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      
      <!-- Legal pages -->
      <url>
        <loc>${baseUrl}/privacy</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.3</priority>
      </url>
      
      <url>
        <loc>${baseUrl}/terms</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.3</priority>
      </url>
      
      <!-- External app links -->
      <url>
        <loc>https://app.visithome.it</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>https://agency.visithome.it</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      
    </urlset>`;
  
  return new Response(sitemap, {
    headers: { 
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}
