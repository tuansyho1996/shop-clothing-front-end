// pages / index.js
'use client'

import { getProduct } from "@/services/service.product";
import ProductCard from "../app.product.cart";
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BestSelling({ products }) {
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
    ],
  };

  return (
    <div className="max-w-6xl w-screen mx-auto px-4 relative">
      <Slider {...settings}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Loading best-selling products...</p>
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



