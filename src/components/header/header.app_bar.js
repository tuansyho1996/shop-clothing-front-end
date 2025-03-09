import Search from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';
import MenuDesktop from './header.menu.desktop';
import MenuMobile from './header.menu.mobile';
import CartHeader from './header.cart';
import AccountMenu from '../ui/account.menu.destop';


const Header = () => {

  return (
    <header className="w-full bg-white shadow">
      {/* Top Section */}
      <div className="flex !text-back justify-between items-center p-1 gap-4 lg:gap-6 ">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-3xl font-bold ">
            <Image
              src="https://d2jfx0w9sp915a.cloudfront.net/eeaec0c4327d5ad05c88b170b8e81665"
              alt="Logo"
              width={70}
              height={70}
              style={{ width: 'auto', height: 'auto' }}
              loading='lazy'
            />
          </Link>
        </div>
        {/* Menu for mobile */}
        <MenuMobile />

        {/* Center Section: Search Bar */}
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="sss"
            className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
          />
          <button className="absolute right-2 top-2">
            <Search className="text-gray-500" />
          </button>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          <AccountMenu />
          <CartHeader />
        </div>
      </div>
      {/* Menu for desktop */}
      <MenuDesktop />
    </header>
  );
};

export default Header;
