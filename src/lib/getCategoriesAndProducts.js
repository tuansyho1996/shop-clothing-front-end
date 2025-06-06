// services/service.product-category.js
import { getCategory } from "@/services/service.category";
import { getProductsOfCategory } from "@/services/service.product";

const getProductOfCategories = async (slug, limit = 12, page = 1) => {
    const res = await getProductsOfCategory(slug, limit, page);
    return res;
}
const getCategories = async (slug) => {
    const category = await getCategory(slug);
    return category;
}
export {
    getProductOfCategories,
    getCategories
}
