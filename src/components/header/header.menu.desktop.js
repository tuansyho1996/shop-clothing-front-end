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
                    { name: "Zip Hoodie", href: '/category/asgardian-elegance&men&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&men&t-shirt' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&men&sweatshirt' },
                    { name: "Short Pant", href: '/category/asgardian-elegance&men&short-pant' },
                    { name: "Hooded Vest", href: '/category/asgardian-elegance&men&hooded-vest' },
                    { name: "Jacket", href: '/category/asgardian-elegance&men&jacket' }
                ]
            },
            {
                name: 'Women',
                href: '/category/asgardian-elegance&women',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&women&hoodie' },
                    { name: "Zip Hoodie", href: '/category/asgardian-elegance&women&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&women&t-shirt' },
                    { name: "Pant", href: '/category/asgardian-elegance&women&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&women&sweatshirt' },
                    { name: "Jacket", href: '/category/asgardian-elegance&women&jacket' },
                    { name: "Women's Pajama", href: '/category/asgardian-elegance&women&women-pajama' },
                    { name: "Dress", href: '/category/asgardian-elegance&women&dress' }
                ]
            },
            {
                name: 'Unisex',
                href: '/category/asgardian-elegance&unisex',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&unisex&hoodie' },
                    { name: "Zip Hoodie", href: '/category/asgardian-elegance&unisex&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&unisex&t-shirt' },
                    { name: "Pant", href: '/category/asgardian-elegance&unisex&pant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&unisex&sweatshirt' },
                    { name: "Jacket", href: '/category/asgardian-elegance&unisex&jacket' }
                ]
            },
            {
                name: 'Children',
                href: '/category/asgardian-elegance&children',
                child: [
                    { name: "Hoodie", href: '/category/asgardian-elegance&children&hoodie' },
                    { name: "T-Shirt", href: '/category/asgardian-elegance&children&t-shirt' },
                    { name: "Sweatpant", href: '/category/asgardian-elegance&children&sweatpant' },
                    { name: "Sweatshirt", href: '/category/asgardian-elegance&children&sweatshirt' },
                    { name: "Zip hoodie", href: '/category/asgardian-elegance&children&zip-hoodie' }
                ]
            },
            {
                name: 'Accessories',
                href: '/category/asgardian-elegance&accessories',
                child: [
                    { name: "curved brim cap", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Unisex Tie", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Bucket Hat", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Car Seat Cover", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Tumbler", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Silk Bandana", href: '/category/asgardian-elegance&accessories&' },
                    { name: "car mats", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Car Stickers", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Steering Wheel Cover", href: '/category/asgardian-elegance&accessories&' },
                    { name: "Windshield Sunshade", href: '/category/asgardian-elegance&accessories&' }
                ]
            }
        ]
    },
    {
        name: `Pharaoh's Legacy`,
        href: 'pharaoh-legacy',
        child: [
            {
                name: 'Men',
                href: 'pharaoh-legacy&men',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Short Pants" },
                    { name: "Tank Top" },
                    { name: "Hooded Vest" },
                    { name: "Jacket" }
                ]
            },
            {
                name: 'Women',
                href: 'pharaoh-legacy&women',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Hooded Vest" },
                    { name: "Jacket" },
                    { name: "Women's Pajamas" },
                    { name: "Dress" }
                ]
            },
            {
                name: 'Unisex',
                href: 'pharaoh-legacy&unisex',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Hooded Vest" },
                    { name: "Jacket " }
                ]
            },
            {
                name: 'Children',
                href: 'pharaoh-legacy&children',
                child: [
                    { name: "Pullover Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Sweatpants" },
                    { name: "Sweatshirt" },
                    { name: "Zip Up hoodie" }
                ]
            },
            {
                name: 'Accessories',
                href: 'pharaoh-legacy&accessories',
                child: [
                    { name: "curved brim cap" },
                    { name: "Unisex Tie" },
                    { name: "Bucket Hat" },
                    { name: "Car Seat Cover" },
                    { name: "Tumbler" },
                    { name: "Silk Bandana" },
                    { name: "car mats" },
                    { name: "Car Stickers" },
                    { name: "Steering Wheel Cover" },
                    { name: "Windshield Sunshade" }
                ]
            }
        ]
    },
    {
        name: 'Greek Epics',
        href: 'greek-epics',
        child: [
            {
                name: 'Men',
                href: 'greek-epics&men',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Short Pants" },
                    { name: "Tank Top" },
                    { name: "Hooded Vest" },
                    { name: "Jacket" }
                ]
            },
            {
                name: 'Women',
                href: 'greek-epics&women',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Hooded Vest" },
                    { name: "Jacket" },
                    { name: "Women's Pajamas" },
                    { name: "Dress" }
                ]
            },
            {
                name: 'Unisex',
                href: 'greek-epics&unisex',
                child: [
                    { name: "Hoodie" },
                    { name: "Zip Up Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Pants" },
                    { name: "Sweatshirt" },
                    { name: "Hooded Vest" },
                    { name: "Jacket" }
                ]
            },
            {
                name: 'Children',
                href: 'greek-epics&children',
                child: [
                    { name: "Pullover Hoodie" },
                    { name: "T-Shirt" },
                    { name: "Sweatpants" },
                    { name: "Sweatshirt" },
                    { name: "Zip up hoodie" }
                ]
            },
            {
                name: 'Accessories',
                href: 'greek-epics&accessories',
                child: [
                    { name: "curved brim cap" },
                    { name: "Unisex Tie" },
                    { name: "Bucket Hat" },
                    { name: "Car Seat Cover" },
                    { name: "Tumbler" },
                    { name: "Silk Bandana" },
                    { name: "car mats" },
                    { name: "Car Stickers" },
                    { name: "Steering Wheel Cover" },
                    { name: "Windshield Sunshade" }
                ]
            }
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
                                    <div className="grid grid grid-cols-5 gap-2 place-content-center w-full max-w-5xl">
                                        {
                                            el.child.map((item, id) => (
                                                <div key={id}>
                                                    <div >
                                                        <CustomLink href={item?.href || ''} fontWeight="font-semibold">{item.name}</CustomLink>
                                                    </div>
                                                    <ul className="space-y-2 text-sm text-gray-600 border-t pt-2 mt-3">
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
