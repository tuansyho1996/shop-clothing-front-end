import CategoryList from '@/components/page_home/home.section.list.category';
import { getProductShop } from '@/services/service.product';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import ListNewProducts from '@/components/new_product/list.new.product';
export async function generateMetadata({ params }) {
    const pageNumber = params.slug || '1';

    return {
        title: `Shop - Page ${pageNumber}`,
        description: `Browse our latest products - page ${pageNumber}.`,
        alternates: {
            canonical: `https://carnobon.com/shop/${pageNumber}`,
        },
    };
}
const Shop = async ({ params }) => {

    const data = await getProductShop(params.slug);
    const { products, currentPage, hasNextPage, hasPrevPage } = data;

    return (
        <main className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Shop Now</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                <CategoryList />
            </section>
            <section id='new-products' className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">New Products</h2>
                <ListNewProducts />
                <div className="flex justify-between mt-6 ">
                    {hasPrevPage ? (
                        <Link href={`/shop/${currentPage - 1}#new-products`} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] text-xl underline">
                            <ArrowBackIosNewIcon className="inline-block mr-1 text-lg" />
                            Previous
                        </Link>
                    ) :
                        (
                            <div className="invisible text-xl w-24">Placeholder</div> // hoặc dùng w-24 để cố định chiều rộng
                        )
                    }
                    {hasNextPage && (
                        <Link href={`/shop/${currentPage + 1}/#new-products`} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] text-xl underline">
                            Next
                            <NavigateNextIcon className="inline-block ml-1" />
                        </Link>
                    )}
                </div>
            </section>
        </main>
    );
}
export default Shop;