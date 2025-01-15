// components/Banner.js
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 text-white h-[30vh] md:h-[50vh] lg:h-[75vh] w-full">
      <div className='items-center justify-start flex pl-5 lg:pl-20 absolute w-full h-full'>
        <div className="relative w-[30vw] h-[30vw] inset-0 flex z-0">
          <Image
            src='https://d2jfx0w9sp915a.cloudfront.net/ecb063494ab8249808a14b1797914d3c'
            alt="Banner Image"
            fill
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
        </div>
      </div>
      <div className='items-center justify-end flex pr-5 lg:pr-20 absolute w-full h-full'>
        <div className="relative w-[30vw] h-[30vw] inset-0 flex z-0">
          <Image
            src='https://d2jfx0w9sp915a.cloudfront.net/aef3060a93e06fb2f6478ee55e06470a'
            alt="Banner Image"
            fill
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
        </div>
      </div>

      <div className="relative z-0 flex flex-col justify-center items-center h-full space-y-4 px-4 text-center">
        {/* Mobile First Approach */}
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          Discover Our Latest Collection
        </h1>
        <h2 className="font-light text-base md:text-lg lg:text-xl">
          Fashion that defines you.
        </h2>
        <button
          className="mt-4 px-8 pt-2 pb-3 font-bold text-md rounded-md md:text-xl bg-accent-color hover:text-black"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
