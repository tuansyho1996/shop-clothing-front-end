// services/service.product-category.js
import { getCategory } from "@/services/service.category";
import { getProductsOfCategory } from "@/services/service.product";

export async function getProductAndCategories(slug) {
    const [categories, products] = await Promise.all([
        getCategory(slug),
        getProductsOfCategory(slug)
    ]);
    return { categories, products };
}
