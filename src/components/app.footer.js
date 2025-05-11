// components/Footer.js
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">
          {/* About Column */}
          <div>
            <h2 className="mb-4 text-lg text-gray-800 font-semibold">General</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <button className="text-gray-600 hover:text-gray-800">
                    About us
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/sizing-guide">
                  <button className="text-gray-600 hover:text-gray-800">
                    Sizing
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <button className="text-gray-600 hover:text-gray-800">
                    Blogs
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <button className="text-gray-600 hover:text-gray-800">
                    Reviews
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/shipping-and-policy">
                  <button className="text-gray-600 hover:text-gray-800">
                    Shipping and returns
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <button className="text-gray-600 hover:text-gray-800">
                    Privacy policy
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <button className="text-gray-600 hover:text-gray-800">
                    FAQs
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Information Column */}
          <div>
            <h2 className="mb-4 text-lg text-gray-800 font-semibold">Quick shop</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/category/asgardian-elegance">
                  <button className="text-gray-600 hover:text-gray-800">
                    Asgardian Elegance
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/pharaoh-legacy">
                  <button className="text-gray-600 hover:text-gray-800">
                    Pharaoh's Legacy
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/olympian-thread">
                  <button className="text-gray-600 hover:text-gray-800">
                    Olympian Thread
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact us Column */}
          <div>
            <h2 className="mb-4 text-lg text-gray-800 font-semibold">
              Contact us
            </h2>
            <ul className="flex gap-4">
              <li>
                <Link href="/#">
                  <FacebookIcon className="text-gray-600 hover:text-gray-800" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <XIcon className="text-gray-600 hover:text-gray-800" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <YouTubeIcon className="text-gray-600 hover:text-gray-800" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <InstagramIcon className="text-gray-600 hover:text-gray-800" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
