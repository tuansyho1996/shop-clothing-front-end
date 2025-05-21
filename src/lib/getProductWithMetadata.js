import { getProduct } from '@/services/service.product';

export async function getProductWithMetadata(slug) {
    const data = await getProduct(slug);
    return {
        metadata: {
            title: data?.product_name,
            description: data?.product_description,
        },
        product: data,
    };
}