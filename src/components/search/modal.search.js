'use client';
import Link from "next/link";

const ModalSearch = ({ searchResults, setIsSearching }) => {

    return (
        <div className='modal-search absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50'>
            <div className='modal-search-content'>
                <div className='modal-search-header'>
                    {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                            <Link href={`/product/${product.product_slug}`} key={product._id} onClick={() => setIsSearching(false)}>
                                <div className='flex items-center p-2 border-b'>
                                    <img src={product.product_images[0]} alt={product.product_name} className='w-12 h-12 mr-2' />
                                    <div>
                                        <h2 className='text-lg font-bold'>{product.product_name}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className='text-lg font-light text-gray-300'>No results found</p>
                    )}
                </div>
                <div className='modal-search-body'>
                    {/* Render search results here */}
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;
