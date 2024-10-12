'use client'
// pages/index.js
import React, { useState, useEffect } from "react";
import ProductCard from "../app.product.cart";

const BestSelling = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Fetch best-selling products (replace this with your API call or static data)
    async function fetchBestSellers() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setBestSellers(data.slice(0, 4));
    }
    fetchBestSellers();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Best-Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSellers.length > 0 ? (
          bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
            // <div>{product.title}</div>
          ))
        ) : (
          <p>Loading best-selling products...</p>
        )}
      </div>
    </section>
  );
}

export default BestSelling
