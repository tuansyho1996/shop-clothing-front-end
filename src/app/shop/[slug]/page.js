import CategoryList from '@/components/page_home/home.section.list.category';
import NewProducts from '@/components/page_home/home.new.products';
import { getAllProducts } from '@/services/service.product';
import Link from 'next/link';
const Shop = async ({ params }) => {
    const products = await getAllProducts();
    const PRODUCT_PER_PAGE = 8;
    const page = parseInt(params.slug) || 1;
    const startIndex = (page - 1) * PRODUCT_PER_PAGE;
    const endIndex = startIndex + PRODUCT_PER_PAGE;
    const paginatedProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / PRODUCT_PER_PAGE);
    const currentPage = page > totalPages ? totalPages : page;
    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Shop Now</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Danh mục</h2>
                <CategoryList />
            </section>
            <section id='new-products' className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Sản phẩm mới</h2>
                <NewProducts products={paginatedProducts} />
                <div className="flex justify-end mt-6">
                    {hasPrevPage && (
                        <Link href={`/shop/${currentPage - 1}#new-products`} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline">
                            Previous
                        </Link>
                    )}
                    {hasNextPage && (
                        <Link href={`/shop/${currentPage + 1}/#new-products`} className="text-[var(--primary-color)] hover:text-[var(--accent-color)] hover:underline">
                            Next
                        </Link>
                    )}
                </div>
            </section>
        </main>
    );
}
export default Shop;