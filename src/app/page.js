import Banner from "@/components/page_home/home.banner";
import BestSelling from "@/components/page_home/home.section.best.selling"
import ListCategory from "@/components/page_home/home.section.list.category";
import { getProduct } from "@/services/service.product";
import ListNewProducts from "@/components/new_product/list.new.product";
import Link from "next/link";

export const metadata = {
  openGraph: {
    title: 'Carnobon — Ancient Myths, Modern Comfort',
    description: 'Step into the world of ancient legends with clothing inspired by Norse, Egyptian, and Greek mythology. Crafted from soft, eco-friendly cotton, our garments blend timeless tales with everyday comfort — designed for modern heroes who value both style and sustainability.',
    url: 'https://carnobon.com',
    siteName: 'Carnobon',
    type: 'website',
    images: [
      {
        url: 'https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a',
        width: 600,
        height: 600,
        alt: 'Carnobon',
      },
      {
        url: 'https://d2jfx0w9sp915a.cloudfront.net/8c4b9a0533340b84e62db527ad166b14',
        width: 600,
        height: 800,
        alt: 'Carnobon — Ancient Myths, Modern Comfort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnobon — Ancient Myths, Modern Comfort',
    description: 'Step into the world of ancient legends with clothing inspired by Norse, Egyptian, and Greek mythology. Crafted from soft, eco-friendly cotton, our garments blend timeless tales with everyday comfort — designed for modern heroes who value both style and sustainability.',
    images: ['https://d2jfx0w9sp915a.cloudfront.net/8c4b9a0533340b84e62db527ad166b14'],
    creator: '@carnobon',
  },
  alternates: {
    canonical: 'https://carnobon.com/',
  },
  title: 'Carnobon — Ancient Myths, Modern Comfort',
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
      <section id="new-products" className="container mx-auto mb-5">
        <h2 className="font-medium text-[1.5rem] px-4">New Arrivals from Myth & Legend</h2>
        <ListNewProducts />
      </section>
    </main >
  );
}