import { getProduct } from '@/services/service.product';

export async function getProductWithMetadata(slug) {
    const data = await getProduct(slug);
    const url = `https://carnobon.com/product/${data?.product_slug}`;
    const title = data?.product_name || 'Carnobon Product';
    const description = data?.product_description || 'High quality cotton product.';
    const image = data?.product_images?.[0] || 'https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a';
    return {
        metadata: {
            title,
            description,
            openGraph: {
                title,
                description,
                url,
                siteName: 'Carnobon',
                type: 'website',
                images: [
                    {
                        url: image,
                        width: 600,
                        height: 800,
                        alt: title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: [image],
                creator: '@carnobon',

            },
        },
        product: data,
    };
}