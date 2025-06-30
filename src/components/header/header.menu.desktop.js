// components/MenDropdown.js
'use client'

import { useState, } from "react";
import CustomLink from "../ui/ui.custom.link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const menu = [
    {
        name: 'Asgardian Elegance',
        href: '/category/asgardian-elegance',
        child: [
            {
                name: 'Men',
                href: '/category/asgardian-elegance&men',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&men&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/asgardian-elegance&men&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&men&t-shirt' },
                    { name: "Pant", href: '/category/asgardian-elegance&men&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&men&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/asgardian-elegance&men&hooded-vest' },
                    { name: "Short Pant", href: '/category/asgardian-elegance&men&short-pant' },
                ]
            },
            {
                name: 'Women',
                href: '/category/asgardian-elegance&women',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&women&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/asgardian-elegance&women&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&women&t-shirt' },
                    { name: "Pant", href: '/category/asgardian-elegance&women&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&women&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/asgardian-elegance&men&hooded-vest' },
                    { name: "Short Pant", href: '/category/asgardian-elegance&women&short-pant' },

                ]
            },
            {
                name: 'Unisex',
                href: '/category/asgardian-elegance&unisex',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&unisex&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/asgardian-elegance&unisex&zip-hoodie' },
                    { name: "Pant", href: '/category/asgardian-elegance&unisex&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&unisex&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/asgardian-elegance&unisex&hooded-vest' },
                    { name: "Short Pant", href: '/category/asgardian-elegance&unisex&short-pant' },

                ]
            },
            {
                name: 'Kid',
                href: '/category/asgardian-elegance&kid',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&kid&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/asgardian-elegance&kid&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&kid&t-shirt' },
                    { name: "pant", href: '/category/asgardian-elegance&kid&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&kid&sweatshirt' },
                ]
            },
            // {
            //     name: 'Accessory',
            //     href: '/category/asgardian-elegance&accessory',
            //     child: [
            //         { name: "curved brim cap", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Unisex Tie", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Bucket Hat", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Car Seat Cover", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Tumbler", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Silk Bandana", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "car mats", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Car Stickers", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Steering Wheel Cover", href: '/category/asgardian-elegance&accessory&' },
            //         { name: "Windshield Sunshade", href: '/category/asgardian-elegance&accessory&' }
            //     ]
            // }
        ]
    },
    {
        name: `Pharaoh's Legacy`,
        href: '/category/pharaoh-legacy',
        child: [
            {
                name: 'Men',
                href: '/category/pharaoh-legacy&men',
                child: [
                    { href: '/category/pharaoh-legacy&men&hoodie', name: "Hoodie" },
                    { href: '/category/pharaoh-legacy&men&zip-hoodie', name: "Zip Up Hoodie" },
                    { href: '/category/pharaoh-legacy&men&t-shirt', name: "T-Shirt" },
                    { href: '/category/pharaoh-legacy&men&pant', name: "Pant" },
                    { href: '/category/pharaoh-legacy&men&sweatshirt', name: "Sweatshirt" },
                    { href: '/category/pharaoh-legacy&men&hooded-vest', name: "Hooded Vest" },
                    { href: '/category/pharaoh-legacy&men&short-pant', name: "Short Pant" },
                ]
            },
            {
                name: 'Women',
                href: '/category/pharaoh-legacy&women',
                child: [
                    { href: '/category/pharaoh-legacy&women&hoodie', name: "Hoodie" },
                    { href: '/category/pharaoh-legacy&women&zip-hoodie', name: "Zip Up Hoodie" },
                    { href: '/category/pharaoh-legacy&women&t-shirt', name: "T-Shirt" },
                    { href: '/category/pharaoh-legacy&women&pant', name: "Pant" },
                    { href: '/category/pharaoh-legacy&women&sweatshirt', name: "Sweatshirt" },
                    { href: '/category/pharaoh-legacy&women&hooded-vest', name: "Hooded Vest" },
                    { href: '/category/pharaoh-legacy&women&short-pant', name: "Short Pant" },

                ]
            },
            {
                name: 'Unisex',
                href: '/category/pharaoh-legacy&unisex',
                child: [
                    { href: '/category/pharaoh-legacy&unisex&hoodie', name: "Hoodie" },
                    { href: '/category/pharaoh-legacy&unisex&zip-hoodie', name: "Zip Up Hoodie" },
                    { href: '/category/pharaoh-legacy&unisex&pant', name: "Pant" },
                    { href: '/category/pharaoh-legacy&unisex&sweatshirt', name: "Sweatshirt" },
                    { href: '/category/pharaoh-legacy&unisex&hooded-vest', name: "Hooded Vest" },
                    { href: '/category/pharaoh-legacy&unisex&short-pant', name: "Short Pant" },


                ]
            },
            {
                name: 'Kid',
                href: '/category/pharaoh-legacy&kid',
                child: [
                    { href: '/category/pharaoh-legacy&kid&hoodie', name: "Hoodie" },
                    { href: '/category/pharaoh-legacy&kid&zip-hoodie', name: "Zip Up hoodie" },
                    { href: '/category/pharaoh-legacy&kid&t-shirt', name: "T-Shirt" },
                    { href: '/category/pharaoh-legacy&kid&pant', name: "Pant" },
                    { href: '/category/pharaoh-legacy&kid&sweatshirt', name: "Sweatshirt" },
                ]
            },
            // {
            //     name: 'Accessory',
            //     href: '/category/pharaoh-legacy&accessory',
            //     child: [
            //         { href: '/category/pharaoh-legacy', name: "curved brim cap" },
            //         { href: '/category/pharaoh-legacy', name: "Unisex Tie" },
            //         { href: '/category/pharaoh-legacy', name: "Bucket Hat" },
            //         { href: '/category/pharaoh-legacy', name: "Car Seat Cover" },
            //         { href: '/category/pharaoh-legacy', name: "Tumbler" },
            //         { href: '/category/pharaoh-legacy', name: "Silk Bandana" },
            //         { href: '/category/pharaoh-legacy', name: "car mats" },
            //         { href: '/category/pharaoh-legacy', name: "Car Stickers" },
            //         { href: '/category/pharaoh-legacy', name: "Steering Wheel Cover" },
            //         { href: '/category/pharaoh-legacy', name: "Windshield Sunshade" }
            //     ]
            // }
        ]
    },
    {
        name: 'Olympian Thread',
        href: '/category/olympian-thread',
        child: [
            {
                name: 'Men',
                href: '/category/olympian-thread&men',
                child: [
                    { name: "Hoodie", href: '/category/olympian-thread&men&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/olympian-thread&men&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/olympian-thread&men&t-shirt' },
                    { name: "Pant", href: '/category/olympian-thread&men&pant' },
                    { name: "Sweatshirt", href: '/category/olympian-thread&men&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/olympian-thread&men&hooded-vest' },
                    { name: "Short Pant", href: '/category/olympian-thread&men&short-pant' },
                ]
            },
            {
                name: 'Women',
                href: '/category/olympian-thread&women',
                child: [
                    { name: "Hoodie", href: '/category/olympian-thread&women&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/olympian-thread&women&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/olympian-thread&women&t-shirt' },
                    { name: "Pant", href: '/category/olympian-thread&women&pant' },
                    { name: "Sweatshirt", href: '/category/olympian-thread&women&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/olympian-thread&women&hooded-vest' },
                    { name: "Short Pant", href: '/category/olympian-thread&women&short-pant' },

                ]
            },
            {
                name: 'Unisex',
                href: '/category/olympian-thread&unisex',
                child: [
                    { name: "Hoodie", href: '/category/olympian-thread&unisex&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/olympian-thread&unisex&zip-hoodie' },
                    { name: "Pant", href: '/category/olympian-thread&unisex&pant' },
                    { name: "Sweatshirt", href: '/category/olympian-thread&unisex&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/olympian-thread&unisex&hooded-vest' },
                    { name: "Short Pant", href: '/category/olympian-thread&unisex&short-pant' },

                ]
            },
            {
                name: 'Kid',
                href: '/category/olympian-thread&kid',
                child: [
                    { name: "Hoodie", href: '/category/olympian-thread&kid&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/olympian-thread&kid&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/olympian-thread&kid&t-shirt' },
                    { name: "Pant", href: '/category/olympian-thread&kid&pant' },
                    { name: "Sweatshirt", href: '/category/olympian-thread&kid&sweatshirt' },
                ]
            },
            // {
            //     name: 'Accessory',
            //     href: 'olympian-thread&accessory',
            //     child: [
            //         { href: '/category/olympian-thread&accessory', name: "curved brim cap" },
            //         { href: '/category/olympian-thread&accessory', name: "Unisex Tie" },
            //         { href: '/category/olympian-thread&accessory', name: "Bucket Hat" },
            //         { href: '/category/olympian-thread&accessory', name: "Car Seat Cover" },
            //         { href: '/category/olympian-thread&accessory', name: "Tumbler" },
            //         { href: '/category/olympian-thread&accessory', name: "Silk Bandana" },
            //         { href: '/category/olympian-thread&accessory', name: "car mats" },
            //         { href: '/category/olympian-thread&accessory', name: "Car Stickers" },
            //         { href: '/category/olympian-thread&accessory', name: "Steering Wheel Cover" },
            //         { href: '/category/olympian-thread&accessory', name: "Windshield Sunshade" }
            //     ]
            // }
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

        <nav className="hidden relative lg:flex  bg-gray-200">
            <ul className="flex relative flex justify-between w-full "
            >
                {
                    menu?.map((el, index) => {
                        return (
                            <li
                                className={` ${el.name === nameOpen ? 'text-accent-color border-accent-color' : ''} flex py-3 basis-1/3 justify-center items-center border-b-2 border-transparent hover:border-accent-color transition-all duration-300`}
                                key={index}
                                onClick={() => handleClickMenu(el.name)}

                            // ref={menuRef}
                            >
                                <div className="relative" >
                                    <div
                                        className={`${el.name === nameOpen ? 'text-accent-color' : 'text-gray-700'} flex gap-1 items-center cursor-pointer relative px-4 font-semibold transition-all duration-300`}

                                    >
                                        {el.name}
                                        <KeyboardArrowDownIcon className={`${el.name === nameOpen ? 'rotate-180' : ''}`} />

                                    </div>

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            {nameOpen && (
                <div className="absolute top-full left-0 w-full z-10">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-0 z-20"
                        onClick={handleClose}
                    ></div>

                    {/* Dropdown */}
                    <div className="relative z-30 flex justify-between bg-white shadow-lg p-6">
                        {
                            // Tìm menu được mở theo nameOpen
                            menu.find((m) => m.name === nameOpen)?.child?.map((item, id) => (
                                <div key={id} className="mx-6">
                                    <div className="text-center" onClick={handleClose}>
                                        <CustomLink
                                            href={item?.href || ''}
                                            fontWeight="font-semibold"
                                            underline={false}
                                        >
                                            {item.name}
                                        </CustomLink>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-600 border-t pt-2 mt-3 text-center">
                                        {item.child.map((it, number) => (
                                            <li key={number} onClick={handleClose}>
                                                <CustomLink
                                                    href={it?.href || ''}
                                                    fontWeight="font-medium"
                                                    textTransform="capitalize"
                                                    className="text-sm font-semibold border-b pb-2 mb-3"
                                                    underline={false}
                                                >
                                                    {it.name}
                                                </CustomLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default MenuDesktop;
