// pages / index.js
import { getProduct } from "@/services/service.product";
import ProductCard from "../app.product.cart";

export default async function BestSelling() {
  const res = await getProduct()
  let products = []
  if (res.status === 200) {
    products = res.metadata
  }
  return (
    <section className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Best-Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
            // <div>{product.title}</div>
          ))
        ) : (
          <p>Loading best-selling products...</p>
        )}
      </div>
    </section>
  );
}





