// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
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
                <Link href="/blog">
                  <button className="text-gray-600 hover:text-gray-800">
                    Blog
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
                <Link href="/category/norse-legends">
                  <button className="text-gray-600 hover:text-gray-800">
                    Norse Legends
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/egyptian-mystique">
                  <button className="text-gray-600 hover:text-gray-800">
                    Egyptian Mystique
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/greek-epics">
                  <button className="text-gray-600 hover:text-gray-800">
                    Greek Epics
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
            <ul className="space-y-2">
              <li>
                <Link href="/info/contact">
                  <button className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </button>
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
