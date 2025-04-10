'use client'
import { getAllProducts } from "@/services/service.product";
import { useEffect, useState } from "react";
import ProductCard from "@/components/app.product.card";

const Page = ({ params }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            const filteredProducts = products.filter((product) =>
                product.product_name.toLowerCase().includes(params.slug.toLowerCase())
            );
            setProducts(filteredProducts);
        };
        fetchProducts();
    }, []);

    // Mock Product Data (Replace with actual data fetching)

    return (
        <main className='min-h-[50vh]'>
            <div className="container mx-auto py-8 px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </main>

    );
}
export default Page;