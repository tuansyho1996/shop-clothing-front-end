import CategoryList from '@/components/page_home/home.section.list.category';
import ListNewProducts from '@/components/new_product/list.new.product';
export async function generateMetadata() {

    return {
        title: `Shop - Ancient Myths, Modern Comfort | Myth-Inspired Fashion for Today`,
        description: `Discover timeless style with our mythology-inspired clothing. Fusing ancient legends with modern comfort, our apparel brings Norse, Greek, and Egyptian myths to life in everyday wear.`,
        alternates: {
            canonical: `https://carnobon.com/shop`,
        },
    };
}
const Shop = async () => {


    return (
        <main className="container mx-auto py-8 px-2">
            <h1 className="text-3xl font-bold mb-6">Shop Now</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 ">Categories</h2>
                <CategoryList />
            </section>
            <section id='new-products' className="mb-12 ">
                <h2 className="text-2xl font-semibold mb-4">New Products</h2>
                <ListNewProducts />

            </section>
        </main>
    );
}
export default Shop;