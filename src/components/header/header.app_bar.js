import Link from 'next/link';
import Image from 'next/image';
import MenuDesktop from './header.menu.desktop';
import MenuMobile from './header.menu.mobile';
import CartHeader from './header.cart';
import AccountMenu from '../ui/account.menu.destop';
import SearchAppBar from '../search/search.products';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = async () => {
  return (
    <>
      <header className="w-full bg-white shadow pb-1 md:pb-0 px-2">
        {/* Top Section */}
        <div className="flex !text-back justify-between items-center p-1 gap-4 lg:gap-6 py-2">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold ">
              <Image
                src='https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a'
                alt="Logo"
                width={70}
                height={70}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Center Section: Search Bar */}
          <div className='hidden md:block flex-grow'>
            <SearchAppBar />
          </div>
          {/* Right Section: Icons */}
          <div className="flex items-center justify-center space-x-4 lg:space-x-6 ">
            <div className='min-[500px]:hidden max-[340px]:hidden'>
              <SearchAppBar />
            </div>
            <div className="max-[500px]:hidden">
              <ConnectButton className=" !text-back !bg-white !border-none !shadow-none !px-4 !py-2" />
            </div>
            {/* Divider Line */}
            <AccountMenu />
            <CartHeader />
          </div>
          {/* Menu for mobile */}
          <MenuMobile />
        </div>

        <div className="min-[500px]:hidden flex justify-center items-center p-1 gap-4 lg:gap-6 py-2">
          <ConnectButton className=" !text-back !bg-white !border-none !shadow-none !rounded-none !px-4 !py-2" />
        </div>
        <div className=' md:hidden max-[500px]:hidden'>
          <SearchAppBar />
        </div>
        {/* Menu for desktop */}
        <MenuDesktop />

        {/* Bottom Section: Navigation Links */}
      </header>
    </>
  );
};

export default Header;
