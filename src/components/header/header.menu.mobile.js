// components/Navbar.tsx
'use client'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomLink from '../ui/ui.custom.link';
const menu = [
    {
        name: 'OG Crypto Series',
        href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain',
        child: [
            {
                name: 'Hoodie',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--hoodie',
            },
            {
                name: 'Zip Hoodie',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--zip-hoodie',
            },
            {
                name: 'Sweatshirt',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--sweatshirt',
            },
            {
                name: 'Hooded Vest',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--hooded-vest',
            },
            {
                name: 'T-Shirt Men',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--t-shirt-men',
            },
            {
                name: 'T-Shirt Women',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--t-shirt-women',
            },
            {
                name: 'Short Pant',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--short-pant',
            },
            {
                name: 'Pant',
                href: '/category/og-crypto-series-honoring-the-pioneers-of-blockchain--pant',
            },

        ]
    },
    {
        name: 'DeFi Culture ',
        href: '/category/defi-culture-wear-the-protocols-that-power-web3',
        child: [
            {
                name: 'Hoodie',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--hoodie',
            },
            {
                name: 'Zip Hoodie',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--zip-hoodie',
            },
            {
                name: 'Sweatshirt',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--sweatshirt',
            },
            {
                name: 'Hooded Vest',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--hooded-vest',
            },
            {
                name: 'T-Shirt Men',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--t-shirt-men',
            },
            {
                name: 'T-Shirt Women',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--t-shirt-women',
            },
            {
                name: 'Short Pant',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--short-pant',
            },
            {
                name: 'Pant',
                href: '/category/defi-culture-wear-the-protocols-that-power-web3--pant',
            },
        ]
    },
    {
        name: 'Meme Coins',
        href: '/categorymeme-coins-for-the-culture-for-the-chaos',
        child: [
            {
                name: 'Hoodie',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--hoodie',
            },
            {
                name: 'Zip Hoodie',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--zip-hoodie',
            },
            {
                name: 'Sweatshirt',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--sweatshirt',
            },
            {
                name: 'Hooded Vest',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--hooded-vest',
            },
            {
                name: 'T-Shirt Men',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--t-shirt-men',
            },
            {
                name: 'T-Shirt Women',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--t-shirt-women',
            },
            {
                name: 'Short Pant',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--short-pant',
            },
            {
                name: 'Pant',
                href: '/category/meme-coins-for-the-culture-for-the-chaos--pant',
            },
        ]

    }


]


const MenuMobile = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const setIsDrawerOpen = (open) => {
    //     setIsDrawerOpen(open);
    // };
    const [nameOpen, setNameOpen] = useState('');
    const [nameChild2Open, setNameChild2Open] = useState('');

    const handleClick = (name) => {
        if (name === nameOpen) {
            setNameOpen('')
        } else {
            setNameOpen(name)
            setNameChild2Open('')
        }
    }
    const handleClick2 = (name) => {
        if (name === nameChild2Open) {
            setNameChild2Open('')
        } else {
            setNameChild2Open(name)
        }
    }
    return (
        <div className="lg:hidden z-40">
            {/* Menu icon for mobile */}
            <div >
                <MenuIcon fontSize='large' className='hover:text-accent-color text-black cursor-pointer' onClick={() => setIsDrawerOpen(true)} />
            </div>
            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
            )}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-[70vw] transform bg-white transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='p-4'>
                    <div className="flex justify-between items-center py-4 border-b">
                        <h2 className="text-xl font-bold">CATEGORIES</h2>
                        <CloseIcon onClick={() => setIsDrawerOpen(false)} />
                    </div>
                    <nav className="w-full transition-transform duration-300" role="navigation" onKeyDown={() => setIsDrawerOpen(false)}>
                        <ul>
                            {
                                menu.map((el, index) => (
                                    <li key={index}>
                                        <div className={`cursor-pointer flex justify-between uppercase items-center px-3 py-3 ${el.name === nameOpen ? 'text-accent-color border-accent-color border-b-2 bg-gray-100' : 'border-b-2 border-gray-200'}`}
                                            onClick={() => handleClick(el.name)}
                                        >
                                            <CustomLink href={el.href} setIsDrawerOpen={setIsDrawerOpen}
                                                underline={false}
                                            >
                                                {el.name}
                                            </CustomLink>
                                            <div className='ml-auto'>
                                                <ChevronRightIcon className={`${el.name === nameOpen && 'rotate-180'} transition-transform duration-300`} />
                                            </div>
                                        </div>

                                        <div style={{ minWidth: '200px' }} className={`${el.name === nameOpen ? 'inline' : 'hidden'}`}>
                                            <ul style={{ width: '100%' }} className='flex flex-col px-8'>
                                                {
                                                    el.child.length > 0 &&
                                                    el.child.map((item, index) =>
                                                    (
                                                        <li key={index} className='font-semibold '>
                                                            <CustomLink href={item.href} setIsDrawerOpen={setIsDrawerOpen}
                                                                underline={false}
                                                            >
                                                                <div className={`flex gap-4 items-center justify-between pl-2 cursor-pointer py-2 ${item.name === nameChild2Open ? 'text-accent-color border-accent-color border-b-2 bg-gray-100' : 'border-b-2 border-gray-200'}`}
                                                                    onClick={() => handleClick2(item.name)}>

                                                                    {item.name}

                                                                </div>
                                                            </CustomLink>

                                                        </li>
                                                    )
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="text-xs text-gray-500 mt-5">
                        <ul className='list-disc pl-5'>
                            <li>Tap the text to visit that category.</li>
                            <li>Tap the arrow or anywhere else on the button to expand or collapse subcategories.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;
