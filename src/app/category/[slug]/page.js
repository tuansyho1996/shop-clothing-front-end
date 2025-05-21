// app/product/[id]/page.js

import { getProductsOfCategory } from "@/services/service.product";
import ProductCard from "@/components/app.product.card";
import { getCategory } from "@/services/service.category";
import CategoryDescription from "@/components/page_category.js/category.description";
import Link from "next/link";


export async function generateMetadata({ params }) {
  const categories = await getCategory(params.slug)
  const title = categories.map((category) => category.category_name).join(' | ')
  const description = categories.map((category) => category.description).join(' | ')
  if (title.length > 60) {
    return {
      title: `${title.slice(0, 60)}...`,
      description: description.slice(0, 160)
    };
  }
  return {
    title,
    description
  };
}

export default async function Page({ params }) {
  const data = await getProductsOfCategory(params.slug)
  const categories = await getCategory(params.slug)
  const title = categories.map((category) => category.category_name).join(' | ')
  const description = categories
    .map((category) => category.category_description)
    .join('\n');

  return (
    <main>
      <section className="container mx-auto min-h-[50vh]">
        <div className="text-center my-6 md:my-8 px-4">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((category, index) => (
              <div key={category._id} className="flex items-center">
                <Link
                  href={`/category/${category.category_slug}`}
                  className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide uppercase hover:underline"
                >
                  {category.category_name}
                </Link>
                {index < categories.length - 1 && (
                  <span className="mx-2 text-gray-500 font-medium">|</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 md:mt-3">
            <span className="block w-10 md:w-12 h-0.5 bg-gray-600"></span>
          </div>
          <CategoryDescription description={description} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {data?.length > 0 ? (
            data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </section>
    </main>

  );
}
