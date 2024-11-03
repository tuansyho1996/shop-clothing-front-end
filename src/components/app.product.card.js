// components/ProductCard.js
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className="p-4 hover:shadow-2xl transition-shadow duration-300 shadow-md m-[10px] bg-[#f9f9f9] space-y-4">
      <Link href={`product/${product?.product_slug}`} >
        <div className="rounded-lg flex flex-col items-center">
          <div className="relative h-96 lg:h-80 w-full">
            <Image
              src={product?.product_images[0]}
              alt={product?.product_name}
              fill
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-semibold">{product?.product_name}</h3>
          <p className="text-gray-500">${product?.product_price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
