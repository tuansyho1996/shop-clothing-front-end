// app/product/[id]/page.js
import ProductAttribute from '@/components/page_product/product.attribute';
import ImagesProduct from '@/components/page_product/product.images';
import { getProduct } from '@/services/service.product';
import GrassIcon from "@mui/icons-material/Grass";
// import EcoIcon from "@mui/icons-material/Eco";
import LoopIcon from "@mui/icons-material/Loop";
import Link from 'next/link';
import ReviewModal from '@/components/page_product/reviews/review.form.modal';
import ReviewDisplay from '@/components/page_product/reviews/review.display';
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
        <main className='min-h-[50vh] container mx-auto py-8 px-4 sm:px-6'>
            <div className="product">
                <div className="flex items-center justify-center mb-6">
                    {/* Breadcrumbs */}
                    {product?.product_list_categories && product?.product_list_categories_name.map((category, index) => (
                        <div key={index}>
                            <Link href={`/category/${product?.product_list_categories[index]}`} className="text-sm text-gray-600 cursor-pointer">
                                <span className="text-xs text-gray-600 cursor-pointer sm:text-sm">{category}</span>
                            </Link>
                            {index < product?.product_list_categories_name.length - 1 &&
                                (['Unisex', 'Men', 'Women'].every(gender => product?.product_list_categories_name.includes(gender)) &&
                                    ['Unisex', 'Men'].includes(product?.product_list_categories_name[index]) ?
                                    <span className="mx-1 text-gray-400">{"|"}</span>
                                    :
                                    <span className="mx-1 text-gray-400">{">"}</span>)
                            }
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <ImagesProduct product={product} />
                    {/* Product Info */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="max-w-mdshadow-lg">
                            <h2 className="text-lg font-semibold">{product?.product_name}</h2>
                            <ProductAttribute product={product} />
                            <div className="flex justify-around mt-6">
                                <div className="relative group">
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        <GrassIcon fontSize="large" className="text-gray-700" />
                                    </button>
                                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:flex items-center p-2 text-xs font-medium text-white bg-gray-800 rounded shadow-lg">
                                        Organic
                                    </span>
                                </div>
                                <div className="relative group">
                                    <button className="p-2 rounded-full hover:bg-gray-200" aria-label=''>
                                        <LoopIcon fontSize="large" className="text-gray-700" />
                                    </button>
                                    <span className="absolute left-1/2 -translate-x-1/2 top-full  mt-2 hidden group-hover:flex items-center p-2 text-xs font-medium text-white bg-gray-800 rounded shadow-lg">
                                        Compostable
                                    </span>
                                </div>
                            </div>


                            <p className="mt-4 text-sm text-gray-600">
                                Our cotton is sourced responsibly, promoting biodegradable, eco-friendly fashion that’s kind to your skin and the planet. Support local craftsmanship while making a positive impact on the environment. Choose comfort, choose quality, choose style – all made in Vietnam.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Product detail */}
                <div className="mt-5">
                    <div className="mb-6 md:mb-8">
                        <h2 className="text-lg font-bold mb-2 md:text-xl">Details</h2>
                        <p className="text-gray-700 text-sm md:text-base">
                            {product?.product_description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-6 md:py-8 border-t border-gray-300 reviews">
                <div className='warp-header-reviews flex flex-col items-center justify-center'>
                    <p className="text-base font-semibold mb-4 md:text-lg">
                        Customer Reviews
                    </p>
                    <p className='text-sm text-gray-500'>
                        Let us know what you think
                    </p>
                    <ReviewModal product_id={product?._id} reviews_length={product?.product_reviews?.length} />
                </div>
                <ReviewDisplay product_reviews={product?.product_reviews} />
            </div>
        </main>

    );
}
