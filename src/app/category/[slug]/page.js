// app/product/[id]/page.js

import ProductCard from "@/components/app.product.card";
import CategoryDescription from "@/components/page_category.js/category.description";
import Link from "next/link";
import { getProductAndCategories } from "@/lib/getCategoriesAndProductsWithMetadata";


export async function generateMetadata({ params }) {
  const { categories } = await getProductAndCategories(params.slug);
  const title = categories.map((category) => category.category_name).join(' | ')
  const description = categories
    .map((category) => category.category_description)
    .join('\n');
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://carnobon.com/category/${categories.map((category) => category.category_slug).join('&')}`,
      siteName: 'Carnobon',
      type: 'website',
      images: [
        {
          url: categories[categories.length - 1]?.category_image[0] || 'https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a',
          width: 600,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [categories[categories.length - 1]?.category_image[0] || 'https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a'],
    },
  };
}

export default async function Page({ params }) {
  const { categories, products } = await getProductAndCategories(params.slug);
  const description = categories
    .map((category) => category.category_description)
    .join('\n');

  return (
    <main>
      <section className="container mx-auto min-h-[50vh]">
        <div className="text-center my-6 md:my-8 px-4">
          <h1 className="flex justify-center flex-wrap">
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
          </h1>
          <div className="flex justify-center mt-2 md:mt-3">
            <span className="block w-10 md:w-12 h-0.5 bg-gray-600"></span>
          </div>
          <CategoryDescription description={description} />
        </div>
        <h2 className="text-xl font-semibold mt-8 mb-4 px-4">Products in {categories.map((category, index) => (
          <span key={category._id} className="">
            {category.category_name}
            {index < categories.length - 1 && (
              <span className="mx-2 text-gray-500 font-medium">|</span>
            )}
          </span>
        ))}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.length > 0 ? (
            products?.map((product) => (
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
