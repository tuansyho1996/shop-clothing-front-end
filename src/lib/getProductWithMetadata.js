import { getProduct } from '@/services/service.product';

export async function getProductWithMetadata(slug) {
    const data = await getProduct(slug);
    const url = `https://carnobon.com/product/${data?.product_slug}`;
    const title = data?.product_name || 'Carnobon Product';
    const description = data?.product_description || 'High quality cotton product.';
    const image = data?.product_images?.[0] || 'https://carnobon.com/default-image.jpg';
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
                        width: 400,
                        height: 400,
                        alt: title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: [image],
            },
        },
        product: data,
    };
}