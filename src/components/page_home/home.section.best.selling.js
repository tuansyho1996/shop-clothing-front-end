// pages / index.js
'use client'

import ProductCard from "../app.product.card";
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/context.app";
import { getProductBestSelling } from "@/services/service.product";
export default function BestSelling() {
  const { bestProducts, setBestProducts } = useContext(AppContext);
  useEffect(() => {
    const fetchBestProducts = async () => {
      const res = await getProductBestSelling();
      if (res) {
        setBestProducts(res);
      }
    };
    fetchBestProducts();
  }, [setBestProducts])
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
  if (!bestProducts) {
    return <p className="px-4">Loading best-selling products...</p>;
  }
  if (bestProducts.length === 0) {
    return <p>No best-selling products available.</p>;
  }
  return (
    <div className="w-full px-4 relative">
      <Slider {...settings}>
        {bestProducts?.length > 0 ? (
          bestProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="px-4">Loading best-selling products...</p>
        )}
      </Slider>
    </div>
  );
}

// Custom Arrow components for Next and Previous
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 xl:right-[-30px] top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <button aria-label="Next" className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
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
      <button aria-label="Prev" className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <ChevronLeft />
      </button>
    </div>
  );
};



