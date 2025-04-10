// app/product/[id]/page.js
import ProductAttribute from '@/components/page_product/product.attribute';
import ImagesProduct from '@/components/page_product/product.images';
import { getProduct } from '@/services/service.product';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import GrassIcon from "@mui/icons-material/Grass";
// import EcoIcon from "@mui/icons-material/Eco";
import LoopIcon from "@mui/icons-material/Loop";
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const data = await getProduct(params.slug) // Fetch your data here, e.g., from an API

    return {
        title: data?.product_name, // Metadata fields
        description: data?.product_description,
        fetchedData: data, // Pass the fetched data for use in the default page
    };
}

export default async function Page({ params }) {
    const data = await getProduct(params.slug)
    const product = data

    // Mock Product Data (Replace with actual data fetching)

    return (
        <main className='min-h-[50vh]'>
            <div className="container mx-auto py-8 px-4 sm:px-6">
                <div className="flex items-center justify-center mb-6">
                    {/* Breadcrumbs */}
                    {product?.product_list_categories && product?.product_list_categories_name.map((category, index) => (
                        <div key={index}>
                            <Link href={`/category/${product?.product_list_categories.slice(0, index + 1).join('&')}`} className="text-sm text-gray-600 cursor-pointer">
                                <span className="text-sm text-gray-600 cursor-pointer">{category}</span>
                            </Link>
                            {index < product?.product_list_categories_name.length - 1 && (
                                <span className="mx-1 text-gray-400">{">"}</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <ImagesProduct product={product} />
                    {/* Product Info */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="max-w-mdshadow-lg">
                            <h2 className="text-lg font-semibold">{product.product_name}</h2>
                            <ProductAttribute product={product} />
                            <div className="flex justify-around mt-6">
                                <div className="relative group">
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        <GrassIcon fontSize="large" className="text-gray-700" />
                                    </button>
                                    <span className="absolute top-full mt-2 hidden group-hover:flex items-center p-2 text-xs font-medium text-white bg-gray-800 rounded shadow-lg">
                                        Organic
                                    </span>
                                </div>
                                <div className="relative group">
                                    <button className="p-2 rounded-full hover:bg-gray-200" aria-label=''>
                                        <LoopIcon fontSize="large" className="text-gray-700" />
                                    </button>
                                    <span className="absolute top-full mt-2 hidden group-hover:flex items-center p-2 text-xs font-medium text-white bg-gray-800 rounded shadow-lg">
                                        Organic
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 text-gray-600">
                                <p className="flex items-center gap-2">
                                    <SwapHorizIcon fontSize="small" /> Easy Returns and Exchanges
                                </p>
                                <p className="flex items-center gap-2">
                                    <LocalShippingIcon fontSize="small" /> Next Day Delivery Available
                                </p>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                Lamassu t-shirt, made from organic natural fibres, printed in the UK in
                                a renewable energy-powered factory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product detail */}
            <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 ">
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg font-bold mb-2 md:text-xl">Details</h2>
                    <p className="text-gray-700 text-sm md:text-base">
                        {product.product_description}
                    </p>
                </div>

                <div className="py-6 md:py-8 border-t border-gray-300">
                    <p className="text-base font-semibold mb-4 md:text-lg">
                        Our Unisex - Anubis 8 - T-Shirt hasn't had any reviews yet
                    </p>
                    <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition text-sm md:text-base">
                        Submit Review
                    </button>
                </div>
            </div>
        </main>

    );
}
