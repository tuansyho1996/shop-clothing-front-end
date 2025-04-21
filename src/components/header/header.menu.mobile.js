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
        href: '/category/greek-epic',
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
                    <nav className="w-full" role="navigation" onKeyDown={() => setIsDrawerOpen(false)}>
                        <ul>
                            {
                                menu.map((el, index) => (
                                    <li key={index}>
                                        <div className={`cursor-pointer flex justify-between uppercase items-center px-3 py-1 border-y border-gray-200 ${el.name === nameOpen ? 'text-accent-color' : ''}`}
                                            onClick={() => handleClick(el.name)}
                                        >
                                            <CustomLink href={el.href} setIsDrawerOpen={setIsDrawerOpen}>
                                                {el.name}
                                            </CustomLink>
                                            <div className='ml-auto'>
                                                {el.name === nameOpen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                                            </div>
                                        </div>

                                        <div style={{ minWidth: '200px' }} className={`${el.name === nameOpen ? 'inline' : 'hidden'}`}>
                                            <ul style={{ width: '100%' }}>
                                                {
                                                    el.child.length > 0 &&
                                                    el.child.map((item, index) =>
                                                    (
                                                        <li key={index} className='font-semibold '>
                                                            <div className={`flex gap-4 items-center justify-between px-8 cursor-pointer py-2 ${item.name === nameChild2Open ? 'text-accent-color' : ''}`}
                                                                onClick={() => handleClick2(item.name)}>
                                                                <CustomLink href={item.href} setIsDrawerOpen={setIsDrawerOpen}>
                                                                    {item.name}
                                                                </CustomLink>
                                                                <div className='ml-auto'>
                                                                    {item.name === nameChild2Open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                                                                </div>
                                                            </div>
                                                            <div style={{ minWidth: '200px' }} className={`${item.name === nameChild2Open ? 'inline' : 'hidden'}`}>
                                                                <ul style={{ width: '100%' }}>
                                                                    {
                                                                        item.child.length > 0 &&
                                                                        item.child.map((it, index) =>
                                                                        (
                                                                            <li key={index} className='font-semibold px-11 py-1'>
                                                                                <CustomLink href={it.href} setIsDrawerOpen={setIsDrawerOpen} textTransform='capitalize'>
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
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;
