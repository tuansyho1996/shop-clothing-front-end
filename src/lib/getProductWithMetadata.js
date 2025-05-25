import { getProduct } from '@/services/service.product';

export async function getProductWithMetadata(slug) {
    const data = await getProduct(slug);
    const url = `/${data?.product_slug}`;
    const title = data?.product_name || 'Carnobon Product';
    const description = data?.product_description || 'High quality cotton product.';
    const image = data?.product_images[0];
    return {
        metadata: {
            title,
            description,
            openGraph: {
                title,
                description,
                url,
                type: 'website',
                images: [
                    {
                        url: image,
                        width: 800,
                        height: 600,
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