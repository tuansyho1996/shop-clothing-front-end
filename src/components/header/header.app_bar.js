import Search from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';
import MenuDesktop from './header.menu.desktop';
import MenuMobile from './header.menu.mobile';
import CartHeader from './header.cart';
import AccountMenu from '../ui/account.menu.destop';
import SearchAppBar from '../search/search.products';


const Header = () => {

  return (
    <header className="w-full bg-white shadow">
      {/* Top Section */}
      <div className="flex !text-back justify-between items-center p-1 gap-4 lg:gap-6">
        {/* Left Section: Logo */}
        <div className="flex items-center ml-4">
          <Link href="/" className="text-3xl font-bold ">
            <Image
              src="https://d2jfx0w9sp915a.cloudfront.net/50964c54ea16c96c515b2c999d8390b4"
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
        <SearchAppBar />
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
