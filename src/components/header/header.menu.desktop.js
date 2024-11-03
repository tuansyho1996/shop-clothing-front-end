// components/MenDropdown.js
'use client'

import { useState, useRef } from "react";
import CustomLink from "../ui/ui.custom.link";
const menu = [
    {
        name: 'Norse Legends',
        child: [
            {
                name: 'Men',
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
        name: 'Egyptian Mystique',
        child: [
            {
                name: 'Men',
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
        child: [
            {
                name: 'Men',
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
                                <div className="relative">
                                    <CustomLink href="/Men" fs='text-lg' fontWeight="font-semibold">
                                        {el.name}
                                    </CustomLink>
                                    <span className={`absolute top-full left-1/2 transform -translate-x-1/2 z-30 ${nameOpen === el.name ? 'visible' : 'hidden'}`}>
                                        <div className="w-[0.75rem] h-[0.75rem] bg-gray-200 rotate-45 transform origin-center translate-y-1/2"></div>
                                    </span>
                                </div>
                                <div className={` ${nameOpen === el.name ? 'visible' : 'hidden'} w-screen absolute top-full left-0 bg-white text-black shadow-lg p-6 z-20 flex justify-center`}>
                                    <div className="grid grid grid-cols-5 gap-2 place-content-center w-full max-w-5xl">
                                        {
                                            el.child.map((item, id) => (
                                                <div key={id}>
                                                    <CustomLink href='#' fontWeight="font-semibold" >{item.name}</CustomLink>
                                                    <ul className="space-y-2 text-sm text-gray-600 border-t pt-2 mt-3">
                                                        {
                                                            item.child.map((it, number) => (
                                                                <li key={number}>
                                                                    <CustomLink fontWeight="font-medium" textTransform='capitalize' href='#' className="text-sm font-semibold border-b pb-2 mb-3">{it.name}</CustomLink>
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
