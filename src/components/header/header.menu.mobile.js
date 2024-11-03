// components/Navbar.tsx
'use client'
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CustomLink from '../ui/ui.custom.link';

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

const MenuMobile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
    };
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
    console.log(nameChild2Open)
    return (
        <div className="lg:hidden">
            {/* Menu icon for mobile */}
            <div >
                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon fontSize='large' className='hover:text-accent-color text-black' />
                </IconButton>
            </div>
            {/* Mobile Drawer */}
            <Drawer sx={{ '& .MuiDrawer-paper': { width: '50vw' } }} anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)} >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">CATEGORIES</h2>
                    <IconButton onClick={() => toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <nav className="w-full" role onKeyDown={() => toggleDrawer(false)}>
                    <ul>
                        {
                            menu.map((el, index) => (
                                <li key={index}>
                                    <CustomLink href="#el.name">
                                        <div className={`cursor-pointer flex justify-between uppercase items-center px-3 py-1 border-y border-gray-200 ${el.name === nameOpen ? 'text-accent-color' : ''}`}
                                            onClick={() => handleClick(el.name)}>
                                            {el.name}
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </CustomLink>

                                    <div style={{ minWidth: '200px' }} className={`${el.name === nameOpen ? 'inline' : 'hidden'}`}>
                                        <ul style={{ width: '100%' }}>
                                            {
                                                el.child.length > 0 &&
                                                el.child.map((item, index) =>
                                                (
                                                    <li key={index} className='font-semibold '>
                                                        <CustomLink href="#el.name">
                                                            <div className={`flex gap-4 items-center px-8 cursor-pointer py-2 ${item.name === nameChild2Open ? 'text-accent-color' : ''}`}
                                                                onClick={() => handleClick2(item.name)}>
                                                                {item.name}
                                                                <KeyboardArrowDownIcon />
                                                            </div>
                                                        </CustomLink>
                                                        <div style={{ minWidth: '200px' }} className={`${item.name === nameChild2Open ? 'inline' : 'hidden'}`}>
                                                            <ul style={{ width: '100%' }}>
                                                                {
                                                                    item.child.length > 0 &&
                                                                    item.child.map((it, index) =>
                                                                    (
                                                                        <li key={index} className='font-semibold px-11 py-1'>
                                                                            <CustomLink href="#el.name" textTransform='capitalize'>
                                                                                {it.name}
                                                                            </CustomLink>
                                                                        </li>
                                                                    )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
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
            </Drawer>
        </div>
    );
};

export default MenuMobile;
