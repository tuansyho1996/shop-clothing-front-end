import { getCategorySitemap } from "@/services/service.category"
import { getProductSitemap } from "@/services/service.product"

export async function GET() {
    const domain = 'https://carnobon.com'

    const products = await getProductSitemap()
    if (!products) {
        return new Response('Error fetching products', { status: 500 })
    }
    const categories = await getCategorySitemap()
    const formatDate = date =>
        new Date(date).toISOString().split('T')[0] // YYYY-MM-DD
    const urls = [
        { slug: '', lastModified: formatDate(new Date()), priority: 1 }, // Home page
        ...products.map(product => ({
            slug: `product/${encodeURIComponent(product.product_slug)}`,
            lastModified: formatDate(product.createdAt || new Date()),
            priority: 0.8
        })),
        ...categories.map(category => ({
            slug: `category/${encodeURIComponent(category.category_slug)}`,
            lastModified: formatDate(category.createdAt || new Date()),
            priority: 0.7
        })),
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                url => `<url>
  <loc>${domain}/${url.slug}</loc>
  <lastmod>${url.lastModified}</lastmod>
    <priority>${url.priority}</priority>
</url>`
            )
            .join('\n')}
</urlset>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
    })
}
