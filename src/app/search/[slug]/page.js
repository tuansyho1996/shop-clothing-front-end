'use client'
import { getProduct } from "@/services/service.product";
import { useEffect, useState } from "react";
import ProductCard from "@/components/app.product.card";

const Page = ({ params }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProduct('all', 24, page, params.slug);
            const filteredProducts = products.filter((product) =>
                product.product_name.toLowerCase().includes(params.slug.toLowerCase())
            );
            setProducts(filteredProducts);
        };
        fetchProducts();
    }, [params.slug, page]);

    // Mock Product Data (Replace with actual data fetching)

    return (
        <main className='min-h-[50vh]'>
            <div className="container mx-auto py-8 px-4 sm:px-6">
                <h1 className="text-2xl font-bold mb-4">Search Results for "{params.slug}"</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
                {products?.length > 0 && (
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setPage(page + 1)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </main>

    );
}
export default Page;