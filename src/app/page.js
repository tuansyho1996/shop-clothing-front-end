import Banner from "@/components/page_home/home.banner";
import BestSelling from "@/components/page_home/home.section.best.selling"
import ListCategory from "@/components/page_home/home.section.list.category";
import { getProduct } from "@/services/service.product";
import NewProducts from "@/components/page_home/home.new.products";
import Link from "next/link";

export const metadata = {
  title: 'Ancient Myths, Modern Comfort',
  description: 'Step into the world of ancient legends with clothing inspired by Norse, Egyptian, and Greek mythology. Crafted from soft, eco-friendly cotton, our garments blend timeless tales with everyday comfort — designed for modern heroes who value both style and sustainability.',
}

export default async function Page() {
  const data = await getProduct('products_home')
  const products = data
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <Banner />
      <section className="container mx-auto ">
        <h2 className="font-medium text-[1.5rem] px-4">Eco-Friendly Cotton Styles – Best Sellers</h2>
        <BestSelling />
      </section>
      <ListCategory />
      <section className="container mx-auto ">
        <h2 className="font-medium text-[1.5rem] px-4">New Arrivals from Myth & Legend</h2>
        <NewProducts products={products} />
        <div className="w-full flex justify-end">
          <button className=" text-[var(--primary-color)] hover:text-[var(--accent-color)] underline my-4">
            <Link href="/shop/1">See All</Link>
          </button>
        </div>
      </section>
    </main >
  );
}