import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material'; // Material-UI components


const Banner = () => {

  return (
    <Box className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
      {/* Background Image */}
      <Image
        src="https://d2jfx0w9sp915a.cloudfront.net/banner-1.png"
        alt="Banner"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0"
      />

      {/* Text content */}
      <Box className="absolute inset-0 flex items-center justify-center z-10">
        <Typography
          variant="h1"
          className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          High-Quality Clothing for Every Style <br /> Raw-Fashion
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
