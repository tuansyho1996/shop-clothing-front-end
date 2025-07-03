'use client';

import { getProductShop } from "@/services/service.product";
import { useEffect, useState } from "react";
import ProductCard from "../app.product.card";

// Hook responsive delta
const useResponsiveDelta = () => {
    const [delta, setDelta] = useState(5); // Mặc định là desktop

    useEffect(() => {
        const handleResize = () => {
            setDelta(window.innerWidth < 640 ? 4 : 5);
        };

        handleResize(); // Gọi ngay khi mounted
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return delta;
};

const ListNewProduct = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const delta = useResponsiveDelta();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProductShop(page);
            if (res) {
                const { products, totalPage } = res;
                setProducts(products);
                setTotalPage(totalPage);
            }
        };
        fetchProducts();
    }, [page]);

    const generatePageNumbers = () => {
        const range = [];
        const left = Math.max(2, page - delta);
        const right = Math.min(totalPage - 1, page + delta);

        range.push(1);
        if (left > 2) range.push("...");

        for (let i = left; i <= right; i++) {
            range.push(i);
        }

        if (right < totalPage - 1) range.push("...");
        if (totalPage > 1) range.push(totalPage);

        return range;
    };

    return (
        <>
            <div
                id="new-products"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
                {products?.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="px-4">No products available</p>
                )}
            </div>

            {totalPage > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {generatePageNumbers().map((item, index) => (
                        <button
                            key={index}
                            disabled={item === "..."}
                            onClick={() => {
                                if (item !== "...") {
                                    setPage(item);
                                    const section = document.getElementById("new-products");
                                    section?.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className={`px-3 py-1 rounded transition-colors duration-150 ${page === item
                                ? "bg-[var(--primary-color)] text-white"
                                : item === "..."
                                    ? "cursor-default text-gray-500"
                                    : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ListNewProduct;
