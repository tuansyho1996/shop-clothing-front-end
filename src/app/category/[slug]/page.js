// app/product/[id]/page.js

import { getProductsOfCategory } from "@/services/service.product";
import ProductCard from "@/components/app.product.card";
import { getCategory } from "@/services/service.category";
import CategoryDescription from "@/components/page_category.js/category.description";


export async function generateMetadata({ params }) {
  const categories = await getCategory(params.slug)
  let title = ''
  let description = ''
  categories.forEach(element => {
    title += ` ${element.category_name}`
    description += ` ${element.category_description}`
  });
  return {
    title,
    description
  };
}

export default async function Page({ params }) {
  const data = await getProductsOfCategory(params.slug)
  const categories = await getCategory(params.slug)
  let arrCategories = categories.map((category) => category.category_name)
  const cleanUnisex = (arr)=>{
    if (arr.includes("Unisex") && (arr.includes("Men") || arr.includes("Women"))) {
      return ["Unisex"];
    }
    return arr.map(e => e.trim()).filter(e => e); 
  }
  let title = cleanUnisex(arrCategories).join(' | ')
  let description = ''
  
  return (
    <main>
      <section className="container mx-auto min-h-[50vh]">
        <div className="text-center my-6 md:my-8 px-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide uppercase">{title}</h2>
          <div className="flex justify-center mt-2 md:mt-3">
            <span className="block w-10 md:w-12 h-0.5 bg-gray-600"></span>
          </div>
          <CategoryDescription description={description} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.length > 0 ? (
            data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </section>
    </main>

  );
}
