'use client';

import { getProductShop } from "@/services/service.product";
import { useEffect, useState } from "react";
import ProductCard from "../app.product.card";

const ListNewProduct = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProductShop(page); // Assuming '1' is the page number for new products
            const { products, totalPage } = res;
            setProducts(products);
            setTotalPage(totalPage);
        };
        fetchProducts();
    }
        , [page]);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {products?.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
            {totalPage > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalPage }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => {
                                setPage(i + 1);
                                const section = document.getElementById("new-products");
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`px-4 py-2 rounded ${page === i + 1
                                ? `bg-[var(--primary-color)] text-white`
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
export default ListNewProduct;