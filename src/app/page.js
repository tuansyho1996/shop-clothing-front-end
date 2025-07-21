import Banner from "@/components/page_home/home.banner";
import BestSelling from "@/components/page_home/home.section.best.selling"
import ListCategory from "@/components/page_home/home.section.list.category";
import { getProduct } from "@/services/service.product";
import ListNewProducts from "@/components/new_product/list.new.product";

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
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <Banner />
      <section className="container mx-auto ">
        <h2 className="font-medium text-[1.5rem] px-4">Featured Drops</h2>
        <BestSelling />

      </section>
      <section className="container mx-auto  py-4 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Premium Materials</h2>
        <p className="text-gray-700 text-lg mb-4 ">
          At Carnobon, we believe that how something feels is just as important as how it looks.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 px-5">
          <li><strong>100% Cotton:</strong> We use soft, breathable cotton that’s built for everyday wear.</li>
          <li><strong>Pre-shrunk & Fade-resistant:</strong> Made to keep shape and color, even after repeated washes.</li>
          <li><strong>Ethically sourced:</strong> Responsibly manufactured with attention to comfort and sustainability.</li>
        </ul>
      </section>
      <ListCategory />
      <section className="container mx-auto  py-4">
        <h2 className="text-2xl font-semibold mb-4">Why Carnobon?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 px-5">
          <li><strong>Pay with ETH:</strong> Native Ethereum support. Fast, secure, decentralized.</li>
          <li><strong>One-time Drops:</strong> Limited editions. No restocks. True scarcity.</li>
          <li><strong>Crypto-First Identity:</strong> Designs inspired by Web3 culture, memes, and protocols.</li>
          <li><strong>Crafted for Comfort:</strong> Clean cuts, soft cotton, modern fits.</li>
        </ul>
      </section>

      <section id="new-products" className="container mx-auto mb-5">
        <h2 className="text-2xl font-semibold mb-4">New Arrivals </h2>
        <ListNewProducts />
      </section>
    </main >
  );
}