// components/ProductCard.js
import Image from "next/image";
import Link from "next/link";
import PriceDisplay from "./ui/display.price";
// import { TokenIcon } from '@web3icons/react'


const ProductCard = ({ product }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className="p-4 hover:shadow-2xl transition-shadow duration-300 shadow-md m-[10px] bg-[#f9f9f9] space-y-4">
      <Link href={`/product/${product?.product_slug}`} >
        <div className="rounded-lg flex flex-col items-center">
          <div className="relative h-96 lg:h-80 w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product?.product_images[0]}
              alt={product?.product_name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 25vw"
              loading="lazy"
              className="hover:scale-125 transition-transform duration-300 rounded-"
            />
          </div>
          <h3 className="text-lg truncate-3-lines">{product?.product_name}</h3>
          <PriceDisplay price={product?.product_price_eth} currency='ETH' font='font-semibold' color='text-black' />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
