import Banner from "@/components/page_home/home.banner";
import BestSelling from "@/components/page_home/home.section.best.selling"
import ListCategory from "@/components/page_home/home.section.list.category";
import { getAllProducts } from "@/services/service.product";
import NewProducts from "@/components/page_home/home.new.products";

export const metadata = {
  title: '...',
  description: '...',
}

export default async function Page() {
  const data = await getAllProducts()
  const products = data
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <Banner />
      <section className="container mx-auto">
        <h2 className="font-[400] text-[1.5rem]">Best-Selling Products</h2>
        <BestSelling products={products} />
      </section>
      <ListCategory />
      <section className="container mx-auto">
        <h2 className="font-[400] text-[1.5rem]">New Products</h2>
        <NewProducts products={products} />
      </section>
    </main >
  );
}