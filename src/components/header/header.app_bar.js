import Link from 'next/link';
import Image from 'next/image';
import MenuDesktop from './header.menu.desktop';
import MenuMobile from './header.menu.mobile';
import CartHeader from './header.cart';
import AccountMenu from '../ui/account.menu.destop';
import SearchAppBar from '../search/search.products';
import Web3Provider from '../providers/web3.provider';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = async () => {
  return (
    <Web3Provider>
      <header className="w-full bg-white shadow">
        {/* Top Section */}
        <div className="flex !text-back justify-between items-center p-1 gap-4 lg:gap-6">
          {/* Left Section: Logo */}
          <div className="flex items-center ml-4">
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
          {/* Menu for mobile */}
          <MenuMobile />

          {/* Center Section: Search Bar */}
          <SearchAppBar />
          {/* Right Section: Icons */}
          <div className="flex items-center space-x-4">
            <AccountMenu />
            <CartHeader />
            <ConnectButton className="!text-back !bg-white !border-none !shadow-none !rounded-none !px-4 !py-2" />
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
        {/* Menu for desktop */}
        <MenuDesktop />

        {/* Bottom Section: Navigation Links */}
      </header>
    </Web3Provider>
  );
};

export default Header;
