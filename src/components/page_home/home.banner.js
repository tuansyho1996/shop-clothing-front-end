// components/Banner.js
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 text-white h-[30vh] md:h-[50vh] lg:h-[75vh] w-full">
      <Image
        src="https://d2jfx0w9sp915a.cloudfront.net/094ce9c37b9199910b6c649f81104fd5"
        alt="Banner Image"
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 25vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-0 flex flex-col justify-center items-center h-full space-y-4 px-4 text-center">
        {/* Mobile First Approach */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          Discover Our Latest Collection
        </h1>
        <h2 className="font-light text-base md:text-lg lg:text-xl">
          Fashion that defines you.
        </h2>
        <Link href="/shop/1">
        <button
          className="mt-4 px-4 pt-1 pb-2 md:px-8 md:pt-2 md:pb-3 font-bold text-md rounded-md md:text-xl bg-accent-color hover:text-black"
        >
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
