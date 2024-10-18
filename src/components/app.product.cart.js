// components/ProductCard.js
import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Box, Typography } from '@mui/material'; // Material-UI components

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white relative shadow-md rounded-lg p-4 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
      <Box className="relative h-40 w-full">
        <Image
          src={product.product_images[0]}
          alt={product.product_name}
          fill
          style={{ objectFit: 'contain' }}
          className=" rounded-md"
        />
      </Box>
      <h3 className="text-lg font-semibold">{product.product_name}</h3>
      <p className="text-gray-500">${product.product_price.toFixed(2)}</p>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
