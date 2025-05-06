// pages / index.js

import ProductCard from "../app.product.card";

export default function NewProducts({ products }) {

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products?.length > 0 ? (
        products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>Loading new products...</p>
      )}
    </div>
  );
}

// Custom Arrow components for Next and Previous




