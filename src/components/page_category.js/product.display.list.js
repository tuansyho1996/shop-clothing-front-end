'use client';
import { getProductOfCategories } from "@/lib/getCategoriesAndProducts";
import { useEffect, useState } from "react";
import ProductCard from "@/components/app.product.card";


const ProductsListCategories = ({ slug }) => {
    const [cPage, setCPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 12;
    useEffect(() => {
        const fetchProducts = async () => {
            const dataProducts = await getProductOfCategories(slug, limit, cPage);
            const { products, totalPages } = dataProducts;
            setTotalPages(totalPages);
            setProducts(products);
        }
        fetchProducts();
    }
        , [slug, cPage]);

    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products?.length > 0 ? (
                    products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>No products available</p>
                )}
                {/* Pagination buttons */}

            </div>
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCPage(i + 1)}
                            className={`px-4 py-2 rounded ${cPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
export default ProductsListCategories;