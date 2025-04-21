'use client';
import { useEffect, useRef, useState } from 'react';
import { getAllProducts } from '@/services/service.product';
import ModalSearch from './modal.search';
import Search from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const SearchAppBar = () => {
    const searchBarRef = useRef(null);
    const [textSearch, setTextSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsSearching(false); // Ẩn modal search
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        handleKeyDown()
    }, []);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);
    useEffect(() => {
        if (textSearch.length > 0) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }
    }, [textSearch]);
    const handleChange = (event) => {
        setTextSearch(event.target.value);
        const filteredProducts = products.filter((product) =>
            product.product_name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };
    const searching = () => {
        if (textSearch.trim().length > 0) {
            router.push(`/search/${textSearch}`); // Redirect to /search/{textSearch}
        }
        setIsSearching(false);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Handle search logic here
            searching();
        }
    };
    // const handleClick = () => {
    //     // Handle search logic here
    //     setIsSearching(true);
    // };
    // const handleClear = () => {
    //     setTextSearch('');
    // };
    // const handleFocus = () => {
    //     // Handle focus logic here
    //     console.log('Input focused');
    // };
    // const handleBlur = () => {
    //     // Handle blur logic here
    //     console.log('Input blurred');
    // };
    // const handleMouseEnter = () => {
    //     // Handle mouse enter logic here
    //     console.log('Mouse entered');
    // };
    // const handleMouseLeave = () => {
    //     // Handle mouse leave logic here
    //     console.log('Mouse left');
    // };
    return (
        <>
            <div className="flex-grow relative search-bar" ref={searchBarRef}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={textSearch}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(event) => handleKeyDown(event)}
                    autoComplete="off"
                    // onClick={handleClick}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    // onClear={handleClear}
                    className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
                />
                {
                    textSearch.length > 0 &&
                    <button
                        type="button"
                        onClick={() => setTextSearch("")}
                        className="absolute right-8 top-[10px] "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                }

                <button type="button" className="absolute right-2 top-2 " onClick={() => searching()}>
                    <Search className="text-gray-500" />
                </button>
                {
                    isSearching &&
                    <ModalSearch searchResults={searchResults} setIsSearching={setIsSearching} />
                }
            </div>
        </>

    );
};

export default SearchAppBar;
