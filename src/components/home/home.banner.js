// components/Banner.js
import { Button, Typography } from '@mui/material';

const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white h-[50vh] h-[75vh] w-full">
      <img
        src="https://d2jfx0w9sp915a.cloudfront.net/banner-1.png"
        alt="Clothing Shop Banner"
        className=" inset-0 absolute z-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-0 flex flex-col justify-center items-center h-full space-y-4 px-4 text-center">
        {/* Mobile First Approach */}
        <Typography
          variant="h2"
          component="h1"
          className="font-bold text-3xl md:text-5xl lg:text-6xl"
        >
          Discover Our Latest Collection
        </Typography>
        <Typography
          variant="h5"
          className="font-light text-base md:text-lg lg:text-xl"
        >
          Fashion that defines you.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className="mt-4 px-6 py-2 text-sm md:text-base"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
