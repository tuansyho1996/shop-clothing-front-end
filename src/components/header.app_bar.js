import { Search, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import DropdownMenu from '@/context/text';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';

const Header = () => {

  return (
    <header className="w-full bg-white shadow">
      {/* Top Section */}
      <div className="flex !text-header-color justify-between items-center p-4 gap-4 lg:gap-6 ">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-3xl font-bold ">
            <Image
              src="https://d2jfx0w9sp915a.cloudfront.net/cdd25bf65b1c7596d72633acc248d520"
              alt="Logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        {/* Menu */}
        <DropdownMenu />

        {/* Center Section: Search Bar */}
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Hoàn 200% nếu hàng giả"
            className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
          />
          <button className="absolute right-2 top-2">
            <Search className="text-gray-500" />
          </button>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/account" className="">
            <Avatar sx={{ color: 'var(--header-color)' }} />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart fontSize='large' />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </Link>
        </div>
      </div>


    </header>
  );
};

export default Header;
