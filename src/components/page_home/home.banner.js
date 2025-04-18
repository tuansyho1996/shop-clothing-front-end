// components/Banner.js
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 text-white h-[30vh] md:h-[50vh] lg:h-[75vh] w-full">
      <div className='items-center justify-start flex pl-5 lg:pl-20 absolute w-full h-full'>
        <div className="relative w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] inset-0 flex z-0">
          <Image
            src='https://d2jfx0w9sp915a.cloudfront.net/094ce9c37b9199910b6c649f81104fd5'
            alt="Banner Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
        </div>
      </div>

      <div className="relative z-0 flex flex-col justify-center items-center h-full space-y-4 px-4 text-center">
        {/* Mobile First Approach */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          Discover Our Latest Collection
        </h1>
        <h2 className="font-light text-base md:text-lg lg:text-xl">
          Fashion that defines you.
        </h2>
        <button
          className="mt-4 px-4 pt-1 pb-2 md:px-8 md:pt-2 md:pb-3 font-bold text-md rounded-md md:text-xl bg-accent-color hover:text-black"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
