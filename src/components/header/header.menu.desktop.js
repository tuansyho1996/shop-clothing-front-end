// components/MenDropdown.js
'use client'

import { useState, } from "react";
import CustomLink from "../ui/ui.custom.link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
const MenuDesktop = () => {
    const [nameOpen, setNameOpen] = useState('')

    const handleOpen = (name) => {
        setNameOpen(name)
    }
    const handleClose = () => {
        setNameOpen('')
    }
    const handleClickMenu = (name) => {
        if (nameOpen === name) {
            setNameOpen('')
        } else {
            setNameOpen(name)
        }
    }
    return (

        <nav className="hidden relative lg:flex bg-gray-200">
            <ul className="flex relative flex justify-between w-full "
            >
                {
                    menu?.map((el, index) => {
                        return (
                            <li
                                className={`${el.name === nameOpen ? 'text-accent-color !border-b-accent-color ' : ''} cursor-pointer flex py-3 basis-1/3 justify-center items-center border-b-2 border-x  border-white hover:border-b-accent-color transition-all duration-300 `}
                                key={index}
                                onClick={() => handleClickMenu(el.name)}

                            // ref={menuRef}
                            >
                                <div className="relative" >
                                    <div
                                        className={`${el.name === nameOpen ? 'text-accent-color' : 'text-gray-700'} flex gap-1 items-center relative px-4 font-semibold transition-all duration-300`}

                                    >
                                        {el.name}
                                        <KeyboardArrowDownIcon className={`${el.name === nameOpen ? 'rotate-180' : ''} transition-transform duration-300`} />

                                    </div>

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            {nameOpen && (
                <div className="absolute top-full left-0 w-full z-10 ">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-0 z-20"
                        onClick={handleClose}
                    ></div>

                    {/* Dropdown */}
                    <div className={`relative z-30  bg-white shadow-lg transition-all duration-300 ${nameOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
                        <div className="flex ">
                            <div className="basis-1/3 bg-black"></div>
                            <div className="p-1 flex-1 flex flex-col justify-between ">
                                {
                                    // Tìm menu được mở theo nameOpen
                                    menu.find((m) => m.name === nameOpen)?.child?.map((item, id) => (
                                        <CustomLink
                                            href={item?.href || ''}
                                            fontWeight="font-semibold"
                                            underline={false}
                                            bgHover="bg-gray-100"
                                            border="border-b-2 border-gray-200"
                                        >
                                            <div key={id} className="mx-6 p-5">
                                                <div className="text-center" onClick={handleClose}>
                                                    {item.name}
                                                </div>

                                            </div>
                                        </CustomLink>

                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default MenuDesktop;
