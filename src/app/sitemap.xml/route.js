import { getCategory } from "@/services/service.category"
import { getProduct } from "@/services/service.product"

export const dynamic = 'force-static'

export async function GET() {
    const domain = 'https://carnobon.com'

    const products = await getProduct()
    console.log('Products fetched:', products)
    if (!products) {
        return new Response('Error fetching products', { status: 500 })
    }
    const categories = await getCategory('all')
    if (!categories) {
        return new Response('Error fetching categories', { status: 500 })
    }

    const urls = [
        '',
        ...products.map(product => `product/${encodeURIComponent(product.product_slug)}`),
        ...categories.map(category => `category/${encodeURIComponent(category.category_slug)}`),
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                url => `<url>
  <loc>${domain}/${url}</loc>
</url>`
            )
            .join('\n')}
</urlset>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
