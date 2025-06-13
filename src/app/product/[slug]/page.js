// app/product/[id]/page.js
import ProductAttribute from '@/components/page_product/product.attribute';
import ImagesProduct from '@/components/page_product/product.images';
import GrassIcon from "@mui/icons-material/Grass";
// import EcoIcon from "@mui/icons-material/Eco";
import LoopIcon from "@mui/icons-material/Loop";
import Link from 'next/link';
import ReviewModal from '@/components/page_product/reviews/review.form.modal';
import ReviewDisplay from '@/components/page_product/reviews/review.display';
import { getProductWithMetadata } from '@/lib/getProductWithMetadata';
import RelatedProduct from '@/components/page_product/related.product';
import ShareSocial from '@/components/page_product/product.share.social';
import ProductSchema from '@/components/page_product/product.schema';
export async function generateMetadata({ params }) {
    const { metadata } = await getProductWithMetadata(params.slug);
    return metadata;
}

export default async function Page({ params }) {
    const { product } = await getProductWithMetadata(params.slug);
    const colorsObject = [
        { name: "Midnight Blue", hex: "#2C3E50" }, //
        { name: "Steel Blue", hex: "#4682B4" }, //
        { name: "Dark Slate", hex: "#2F4F4F" }, //
        { name: "Wine", hex: "#722F37" }, //
        { name: "Forest Green", hex: "#2E4E3F" }, //
        { name: "Smoky Gray", hex: "#505050" }, //
        { name: "white", hex: "#ffffff" }, //
        { name: "Light Gray", hex: "#D3D3D3" }, // Light Gray
        { name: "Platinum", hex: "#E5E4E2" }, // Platinum
        { name: "Champagne", hex: "#F7E7CE" }, // Champagne
        { name: "Lavender Gray", hex: "#C4C3D0" }, // Lavender Gray
        { name: "Powder Blue", hex: "#B0E0E6" }, // Powder Blue
        { name: "Jet Black", hex: "#000000" }, // Jet Black
        { name: "Gunmetal", hex: "#2A3439" }, // Gunmetal
        { name: "Onyx", hex: "#353839" }, // Onyx
    ]
    const listSizes = [
        {
            name: ['unisex', 'hoodie'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"]
        },
        {
            name: ['unisex', 'zip-hoodie'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"]
        },
        {
            name: ['unisex', 'sweatshirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'hooded-vest'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'short-pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['men', 't-shirt'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['women', 't-shirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "9XL"]
        },
        {
            name: ['kid', 'hoodie'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 't-shirt'],
            values: ["XS", "S", "M", "L", "XL", "2XL",]
        },
        {
            name: ['kid', 'sweatshirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 'zip-hoodie'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 'pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
    ]
    // const hasVariant = [];
    // const findSize = listSizes.find(el => el.name.every(item => product?.product_list_categories.includes(item)))
    // const variantId = product._id.toHexString().slice(-6).toUpperCase();
    // if (findSize) {
    //     const colors = product.product_colors.map(color => colorsObject.find(el => el.hex === color)?.name || color);
    //     colors.forEach(color => {
    //         findSize.values.forEach(size => {
    //             hasVariant.push({
    //                 "@type": "Product",
    //                 sku: `MYTHOLOGY-${color.toUpperCase().replace(/\s+/g, '-')}-${size}-${variantId}`,
    //                 color: color,
    //                 size: size,
    //                 offers: {
    //                     "@type": "Offer",
    //                     price: product.product_price,
    //                     priceCurrency: "USD",
    //                     availability: "https://schema.org/InStock"
    //                 }
    //             });
    //         });
    //     });

    // }
    // const productSchema = {
    //     "@context": "https://schema.org/",
    //     "@type": "Product",
    //     "name": `MYTHOLOGY-${variantId}`,
    //     "image": [product.product_images[0] || "https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a"],
    //     "description": product.product_description,
    //     "sku": product?.product_sku,
    //     "brand": {
    //         "@type": "Brand",
    //         "name": "Carnobon"
    //     },
    //     "gender": "unisex",
    //     "ageGroup": "adult",
    //     "offers": {
    //         "@type": "Offer",
    //         "url": `https://carnobon.com/product/${product.product_slug}`,
    //         "priceCurrency": "USD",
    //         "price": product?.product_price?.toFixed(2),
    //         "availability": "https://schema.org/InStock",
    //         "priceValidUntil": "2026-12-31",
    //         "shippingDetails": [
    //             {
    //                 "@type": "OfferShippingDetails",
    //                 "shippingRate": {
    //                     "@type": "MonetaryAmount",
    //                     "value": 4.99,
    //                     "currency": "USD"
    //                 },
    //                 "shippingLabel": "Standard Shipping (under $100)",
    //                 "priceSpecification": {
    //                     "@type": "PriceSpecification",
    //                     "priceCurrency": "USD",
    //                     "eligibleTransactionVolume": {
    //                         "@type": "PriceSpecification",
    //                         "minPrice": 0,
    //                         "maxPrice": 99.99
    //                     }
    //                 },
    //                 "deliveryTime": {
    //                     "@type": "ShippingDeliveryTime",
    //                     "handlingTime": {
    //                         "@type": "QuantitativeValue",
    //                         "minValue": 0,
    //                         "maxValue": 2,
    //                         "unitCode": "d" // days
    //                     },
    //                     "transitTime": {
    //                         "@type": "QuantitativeValue",
    //                         "minValue": 10,
    //                         "maxValue": 15,
    //                         "unitCode": "d"
    //                     }
    //                 },
    //                 "shippingWeight": {
    //                     "@type": "QuantitativeValue",
    //                     "value": 0.5,
    //                     "unitCode": "kg" // hoặc "g" nếu bạn muốn gram
    //                 }
    //             },
    //             {
    //                 "@type": "OfferShippingDetails",
    //                 "shippingRate": {
    //                     "@type": "MonetaryAmount",
    //                     "value": 0,
    //                     "currency": "USD"
    //                 },
    //                 "shippingLabel": "Free Shipping (over $100)",
    //                 "priceSpecification": {
    //                     "@type": "PriceSpecification",
    //                     "priceCurrency": "USD",
    //                     "eligibleTransactionVolume": {
    //                         "@type": "PriceSpecification",
    //                         "minPrice": 100
    //                     }
    //                 },
    //                 "deliveryTime": {
    //                     "@type": "ShippingDeliveryTime",
    //                     "handlingTime": {
    //                         "@type": "QuantitativeValue",
    //                         "minValue": 0,
    //                         "maxValue": 2,
    //                         "unitCode": "d" // days
    //                     },
    //                     "transitTime": {
    //                         "@type": "QuantitativeValue",
    //                         "minValue": 10,
    //                         "maxValue": 15,
    //                         "unitCode": "d"
    //                     }
    //                 },
    //                 "shippingWeight": {
    //                     "@type": "QuantitativeValue",
    //                     "value": 0.5,
    //                     "unitCode": "kg" // hoặc "g" nếu bạn muốn gram
    //                 }
    //             },
    //         ]
    //     },
    //     hasVariant: hasVariant,
    //     "additionalProperty": {
    //         "@type": "PropertyValue",
    //         "name": "Material",
    //         "value": product?.product_material || "Cotton"
    //     }

    // }
    // Mock Product Data (Replace with actual data fetching)
    return (
        <>
            <ProductSchema colorsObject={colorsObject} listSizes={listSizes} product={product} />
            <main className='min-h-[50vh] container mx-auto py-8 px-4 sm:px-6'>
                {
                    (!product || Array.isArray(product)) ?
                        <div className="flex justify-center h-screen">
                            <p className="text-2xl font-bold text-gray-700 mt-20">Product not found</p>
                        </div> :
                        <div>
                            <div className="product">
                                <div className="flex items-center justify-center mb-6">
                                    {/* Breadcrumbs */}
                                    {product?.product_list_categories && product?.product_list_categories_name.map((category, index) => (
                                        <div key={index}>
                                            <Link href={`/category/${product?.product_list_categories[index]}`} className="">
                                                <span className="text-xs text-gray-600 hover:text-[var(--accent-color)] cursor-pointer sm:text-sm">{category}</span>
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
                                            <h1 className="text-lg font-semibold">{product?.product_name}</h1>
                                            <ProductAttribute product={product} colorsObject={colorsObject} listSizes={listSizes} />
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
                                            <ShareSocial product={product} />
                                        </div>
                                    </div>
                                </div>
                                {/* Product detail */}
                                <div className="mt-5">
                                    <div className="mb-6 md:mb-8">
                                        <h2 className=" font-bold mb-2 md:text-xl">Details</h2>
                                        <p className="text-gray-700 text-sm md:text-base">
                                            {product?.product_description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <RelatedProduct category={`${product?.product_list_categories[0]}&${product?.product_list_categories[1]}&${product?.product_list_categories[product?.product_list_categories.length - 1]}`} />
                            <div className="py-6 md:py-8 reviews">
                                <hr className="my-5" />
                                <div className='warp-header-reviews flex flex-col items-center justify-center'>
                                    <h2 className="text-base font-semibold mb-4 md:text-xl">
                                        Customer Reviews
                                    </h2>
                                    <p className='text-sm text-gray-500'>
                                        Let us know what you think
                                    </p>
                                    <ReviewModal product_id={product?._id} reviews_length={product?.product_reviews?.length} />
                                </div>
                                <ReviewDisplay product_reviews={product?.product_reviews} />
                            </div>
                        </div>


                }

            </main>
        </>
    );
}
