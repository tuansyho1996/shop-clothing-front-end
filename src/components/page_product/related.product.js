
'use client'
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProductsOfCategory } from '@/services/service.product';
import { useState, useEffect } from 'react';
import ProductCard from '../app.product.card';
const RelatedProduct = ({ category }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        // Fetch related products based on the category
        const fetchRelatedProducts = async () => {
            console.log(category)
            const { products } = await getProductsOfCategory(category);
            console.log('Related Products:', products.length);

            if (products) {
                setRelatedProducts(products);
            }
            // Fetch logic here
        };
        fetchRelatedProducts();
    }, [category]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <>
            <h2 className='my-5 font-bold md:text-xl'>Related Products</h2>
            <div className="  related-product">
                <div className="related-product-list w-full relative">
                    {/* Example related products */}
                    {
                        relatedProducts?.length > 3 ?
                            <Slider {...settings}>
                                {
                                    relatedProducts?.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))
                                }

                            </Slider>
                            :
                            <div className="flex items-center justify-center ">
                                <p className="text-gray-500">No related products found.</p>
                            </div>
                    }

                </div>
            </div>
        </>
    );
}
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-0 xl:right-[-30px] top-1/2 transform -translate-y-1/2 z-10"
            onClick={onClick}
        >
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <ChevronRight />
            </button>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-0 xl:left-[-30px] top-1/2 transform -translate-y-1/2 z-10"
            onClick={onClick}
        >
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <ChevronLeft />
            </button>
        </div>
    );
};
export default RelatedProduct;