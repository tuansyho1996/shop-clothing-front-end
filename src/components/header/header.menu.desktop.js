// components/MenDropdown.js
'use client'

import { useState, useRef } from "react";
import CustomLink from "../ui/ui.custom.link";
const menu = [
    {
        name: 'Norse Legends',
        href: '/category/norse-legends',
        child: [
            {
                name: 'Men',
                href: '/category/norse-legends&men',
                child: [
                    { name: "Hoodie", href: '/category/norse-legends&men&hoodie' },
                    { name: "Zip Hoodie", href: '/category/norse-legends&men&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/norse-legends&men&t-shirt' },
                    { name: "Pant", href: '/category/norse-legends&men&pant' },
                    { name: "Sweatshirt", href: '/category/norse-legends&men&sweatshirt' },
                    { name: "Short Pant", href: '/category/norse-legends&men&short-pant' },
                    { name: "Tank Top", href: '/category/norse-legends&men&tank-top' },
                    { name: "Jacket", href: '/category/norse-legends&men&jacket' }
                ]
            },
            {
                name: 'Women',
                href: '/category/norse-legends&women',
                child: [
                    { name: "Hoodie", href: '/category/norse-legends&women&hoodie' },
                    { name: "Zip Hoodie", href: '/category/norse-legends&women&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/norse-legends&women&t-shirt' },
                    { name: "Pant", href: '/category/norse-legends&women&pant' },
                    { name: "Sweatshirt", href: '/category/norse-legends&women&sweatshirt' },
                    { name: "Jacket", href: '/category/norse-legends&women&jacket' },
                    { name: "Women's Pajama", href: '/category/norse-legends&women&women-pajama' },
                    { name: "Dress", href: '/category/norse-legends&women&dress' }
                ]
            },
            {
                name: 'Unisex',
                href: '/category/norse-legends&unisex',
                child: [
                    { name: "Hoodie", href: '/category/norse-legends&unisex&hoodie' },
                    { name: "Zip Hoodie", href: '/category/norse-legends&unisex&zip-hoodie' },
                    { name: "T-Shirt", href: '/category/norse-legends&unisex&t-shirt' },
                    { name: "Pant", href: '/category/norse-legends&unisex&pant' },
                    { name: "Sweatshirt", href: '/category/norse-legends&unisex&sweatshirt' },
                    { name: "Jacket", href: '/category/norse-legends&unisex&jacket' }
                ]
            },
            {
                name: 'Children',
                href: '/category/norse-legends&children',
                child: [
                    { name: "Hoodie", href: '/category/norse-legends&children&hoodie' },
                    { name: "T-Shirt", href: '/category/norse-legends&children&t-shirt' },
                    { name: "Sweatpant", href: '/category/norse-legends&children&sweatpant' },
                    { name: "Sweatshirt", href: '/category/norse-legends&children&sweatshirt' },
                    { name: "Zip hoodie", href: '/category/norse-legends&children&zip-hoodie' }
                ]
            },
            {
                name: 'Accessories',
                href: '/category/norse-legends&accessories',
                child: [
                    { name: "curved brim cap", href: '/category/norse-legends&accessories&' },
                    { name: "Unisex Tie", href: '/category/norse-legends&accessories&' },
                    { name: "Bucket Hat", href: '/category/norse-legends&accessories&' },
                    { name: "Car Seat Cover", href: '/category/norse-legends&accessories&' },
                    { name: "Tumbler", href: '/category/norse-legends&accessories&' },
                    { name: "Silk Bandana", href: '/category/norse-legends&accessories&' },
                    { name: "car mats", href: '/category/norse-legends&accessories&' },
                    { name: "Car Stickers", href: '/category/norse-legends&accessories&' },
                    { name: "Steering Wheel Cover", href: '/category/norse-legends&accessories&' },
                    { name: "Windshield Sunshade", href: '/category/norse-legends&accessories&' }
                ]
            }
        ]
    },
    {
        name: 'Egyptian Mystique',
        href: 'egyptian-mystique',
        child: [
            {
                name: 'Men',
                href: 'egyptian-mystique&men',
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
                href: 'egyptian-mystique&women',
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
                href: 'egyptian-mystique&unisex',
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
                href: 'egyptian-mystique&children',
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
                href: 'egyptian-mystique&accessories',
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
    const timeoutRef = useRef(null)
    const handleOpen = (name) => {
        clearTimeout(timeoutRef.current);
        setNameOpen(name)
    }
    const handleClose = () => {
        timeoutRef.current = setTimeout(() => {
            setNameOpen('')
        }, 100);
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
                            >
                                <div className="relative" >
                                    <div onClick={() => setNameOpen('')}>
                                        <CustomLink href={el?.href || ''} fs='text-lg' fontWeight="font-semibold">
                                            {el.name}
                                        </CustomLink>
                                    </div>
                                    <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 ${nameOpen === el.name ? 'visible' : 'hidden'}`}>
                                        <div className="w-[0.75rem] h-[0.75rem] bg-gray-200 rotate-45 transform origin-center translate-y-1/2"></div>
                                    </span>
                                </div>
                                <div className={` ${nameOpen === el.name ? 'visible' : 'hidden'} w-screen absolute top-full left-0 bg-white text-black shadow-lg p-6 z-20 flex justify-center`}>
                                    <div className="grid grid grid-cols-5 gap-2 place-content-center w-full max-w-5xl">
                                        {
                                            el.child.map((item, id) => (
                                                <div key={id}>
                                                    <div onClick={() => setNameOpen('')}>
                                                        <CustomLink href={item?.href || ''} fontWeight="font-semibold">{item.name}</CustomLink>
                                                    </div>
                                                    <ul className="space-y-2 text-sm text-gray-600 border-t pt-2 mt-3">
                                                        {
                                                            item.child.map((it, number) => (
                                                                <li key={number} onClick={() => setNameOpen('')}>
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
