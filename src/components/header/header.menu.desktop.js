// components/MenDropdown.js
'use client'

import { useState } from "react";
import CustomLink from "../ui/ui.custom.link";
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
                    { name: "T-Shirt", href: '/category/asgardian-elegance&kid&t-shirt' },
                    { name: "Sweatpant", href: '/category/asgardian-elegance&kid&sweatpant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&kid&sweatshirt' },
                    { name: "Zip Up Hoodie", href: '/category/asgardian-elegance&kid&zip-hoodie' }
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
                    { href: '/category/pharaoh-legacy&men&sweat-shirt', name: "Sweatshirt" },
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
                    { href: '/category/pharaoh-legacy&women&sweat-shirt', name: "Sweatshirt" },
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
                    { href: '/category/pharaoh-legacy&unisex&sweat-shirt', name: "Sweatshirt" },
                    { href: '/category/pharaoh-legacy&unisex&hooded-vest', name: "Hooded Vest" },
                    { href: '/category/pharaoh-legacy&unisex&short-pant', name: "Short Pant" },
                ]
            },
            {
                name: 'Kid',
                href: '/category/pharaoh-legacy&kid',
                child: [
                    { href: '/category/pharaoh-legacy&kid&hoodie', name: "Hoodie" },
                    { href: '/category/pharaoh-legacy&kid&t-shirt', name: "T-Shirt" },
                    { href: '/category/pharaoh-legacy&kid&pant', name: "Pant" },
                    { href: '/category/pharaoh-legacy&kid&sweatshirt', name: "Sweatshirt" },
                    { href: '/category/pharaoh-legacy&kid&zip-hoodie', name: "Zip Up hoodie" }
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
        name: 'Greek Epic',
        href: 'greek-epic',
        child: [
            {
                name: 'Men',
                href: '/category/greek-epic&men',
                child: [
                    { name: "Hoodie", href: '/category/greek-epic&men&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/greek-epic&men&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/greek-epic&men&t-shirt' },
                    { name: "Pant", href: '/category/greek-epic&men&pant' },
                    { name: "Sweatshirt", href: '/category/greek-epic&men&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/greek-epic&men&hooded-vest' },
                    { name: "Short Pant", href: '/category/greek-epic&men&short-pant' },
                ]
            },
            {
                name: 'Women',
                href: 'greek-epic&women',
                child: [
                    { name: "Hoodie", href: '/category/greek-epic&women&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/greek-epic&women&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/greek-epic&women&t-shirt' },
                    { name: "Pant", href: '/category/greek-epic&women&pant' },
                    { name: "Sweatshirt", href: '/category/greek-epic&women&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/greek-epic&women&hooded-vest' },
                    { name: "Short Pant", href: '/category/greek-epic&women&short-pant' },
                ]
            },
            {
                name: 'Unisex',
                href: 'greek-epic&unisex',
                child: [
                    { name: "Hoodie", href: '/category/greek-epic&unisex&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/greek-epic&unisex&zip-hoodie' },
                    { name: "Pant", href: '/category/greek-epic&unisex&pant' },
                    { name: "Sweatshirt", href: '/category/greek-epic&unisex&sweatshirt' },
                    { name: "Hooded Vest", href: '/category/greek-epic&unisex&hooded-vest' },
                    { name: "Short Pant", href: '/category/greek-epic&unisex&short-pant' },
                ]
            },
            {
                name: 'Kid',
                href: 'greek-epic&kid',
                child: [
                    { name: "Hoodie", href: '/category/greek-epic&kid&hoodie' },
                    { name: "Zip Up Hoodie", href: '/category/greek-epic&kid&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/greek-epic&kid&t-shirt' },
                    { name: "Pant", href: '/category/greek-epic&kid&pant' },
                    { name: "Sweatshirt", href: '/category/greek-epic&kid&sweatshirt' },
                ]
            },
            // {
            //     name: 'Accessory',
            //     href: 'greek-epic&accessory',
            //     child: [
            //         { href: '/category/greek-epic&accessory', name: "curved brim cap" },
            //         { href: '/category/greek-epic&accessory', name: "Unisex Tie" },
            //         { href: '/category/greek-epic&accessory', name: "Bucket Hat" },
            //         { href: '/category/greek-epic&accessory', name: "Car Seat Cover" },
            //         { href: '/category/greek-epic&accessory', name: "Tumbler" },
            //         { href: '/category/greek-epic&accessory', name: "Silk Bandana" },
            //         { href: '/category/greek-epic&accessory', name: "car mats" },
            //         { href: '/category/greek-epic&accessory', name: "Car Stickers" },
            //         { href: '/category/greek-epic&accessory', name: "Steering Wheel Cover" },
            //         { href: '/category/greek-epic&accessory', name: "Windshield Sunshade" }
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
    return (
        <nav className="hidden lg:flex  bg-gray-200">
            <ul className="flex relative flex justify-center w-full py-3 gap-4">
                {
                    menu?.map((el, index) => {
                        return (
                            <li
                                className={`z-10 ${el.name === nameOpen ? 'text-accent-color' : ''} `}
                                onMouseEnter={() => handleOpen(el.name)}
                                onMouseLeave={handleClose}
                                key={index}
                                onClick={() => handleClose()}
                            >
                                <div className="relative" >
                                    <div >
                                        <CustomLink href={el?.href || ''} fs='text-lg' fontWeight="font-semibold">
                                            {el.name}
                                        </CustomLink>
                                    </div>
                                    <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 bg-gray-200 h-3 w-full`}>
                                    </span>
                                    <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 ${nameOpen === el.name ? 'visible' : 'hidden'}`}>
                                        <div className="w-[0.75rem] h-[0.75rem] bg-gray-200 rotate-45 transform origin-center translate-y-1/2"></div>
                                    </span>
                                </div>
                                <div className={` ${nameOpen === el.name ? 'visible' : 'hidden'} w-screen absolute top-full left-0 bg-white text-black shadow-lg p-6 z-20 flex justify-center`}>
                                    <div className="grid grid grid-cols-4 gap-2 place-content-center w-full max-w-5xl">
                                        {
                                            el.child.map((item, id) => (
                                                <div key={id}>
                                                    <div className="text-center">
                                                        <CustomLink href={item?.href || ''} fontWeight="font-semibold">{item.name}</CustomLink>
                                                    </div>
                                                    <ul className="space-y-2 text-sm text-gray-600 border-t pt-2 mt-3 text-center">4
                                                        {
                                                            item.child.map((it, number) => (
                                                                <li key={number} >
                                                                    <CustomLink href={it?.href || ''} fontWeight="font-medium" textTransform='capitalize' className="text-sm font-semibold border-b pb-2 mb-3">{it.name}</CustomLink>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default MenuDesktop;
