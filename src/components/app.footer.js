// components/Footer.js
'use client';
import Link from 'next/link';
import { AppContext } from '@/context/context.app';
import { useContext } from 'react';

const Footer = () => {
  const { globals } = useContext(AppContext);

  const faceboolk = globals?.find((item) => item.global_name === 'facebook')
  const youtube = globals?.find((item) => item.global_name === 'youtube')
  const instagram = globals?.find((item) => item.global_name === 'instagram')
  const twitter = globals?.find((item) => item.global_name === 'twitter')
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-center md:text-left">
          {/* About Column */}
          <div className='flex flex-col items-center'>
            <h2 className="mb-2 pb-1 text-lg text-gray-800 font-semibold border-b-2 border-gray-200">General</h2>
            <ul className="space-y-2 flex flex-col items-center">
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
                <Link href="/track-order">
                  <button className="text-gray-600 hover:text-gray-800">
                    Track order
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
          <div className='flex flex-col items-center'>
            <h2 className="border-b-2 border-gray-200 mb-2 pb-1 text-lg text-gray-800 font-semibold">Quick shop</h2>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <Link href="/category/og-crypto-series-honoring-the-pioneers-of-blockchain">
                  <button className="text-gray-600 hover:text-gray-800">
                    OG Crypto Series
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/defi-culture-wear-the-protocols-that-power-web3">
                  <button className="text-gray-600 hover:text-gray-800">
                    DeFi Culture
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/category/meme-coins-for-the-culture-for-the-chaos">
                  <button className="text-gray-600 hover:text-gray-800">
                    Meme Coins
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Payments Network */}
          <div className='flex flex-col items-center'>
            <h2 className="border-b-2 border-gray-200 mb-2 pb-1 text-lg text-gray-800 font-semibold text-center">
              Payment Networks
            </h2>
            <ul className="flex gap-2 cursor-pointer flex-wrap justify-center mt-4">
              <li title='Ethereum'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" >
                  <path fill="#8FFCF3" d="M12 3v6.65l5.625 2.516z" />
                  <path fill="#CABCF8" d="m12 3-5.625 9.166L12 9.651z" />
                  <path fill="#CBA7F5" d="M12 16.477v4.522l5.625-7.784z" />
                  <path fill="#74A0F3" d="M12 21v-4.523l-5.625-3.262z" />
                  <path fill="#CBA7F5" d="m12 15.43 5.625-3.263L12 9.65z" />
                  <path fill="#74A0F3" d="M6.375 12.167 12 15.429V9.651z" />
                  <path fill="#202699" d="m12 15.429-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23 5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198 5.16 2.295-5.16-8.41z" />
                  <path fill="#202699" d="M12 16.406 6.375 13.21 12 21l5.625-7.79zm-4.995-2.633 4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" />
                </svg>
              </li>
              <li title='Arbitrum'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path fill="#213147" d="M4.515 8.471v7.056c0 .45.245.867.64 1.092l6.205 3.529a1.3 1.3 0 0 0 1.28 0l6.203-3.53c.396-.224.64-.64.64-1.09V8.47c0-.45-.244-.867-.64-1.091L12.64 3.85a1.3 1.3 0 0 0-1.28 0L5.155 7.38a1.25 1.25 0 0 0-.639 1.091" />
                  <path fill="#12AAFF" d="m13.353 13.368-.885 2.39a.3.3 0 0 0 0 .205l1.523 4.112 1.76-1.001-2.113-5.706a.152.152 0 0 0-.285 0m1.774-4.019a.152.152 0 0 0-.285 0l-.885 2.39a.3.3 0 0 0 0 .205l2.494 6.732 1.761-1.001z" />
                  <path fill="#9DCCED" d="M11.998 4.115a.3.3 0 0 1 .126.033l6.715 3.818a.25.25 0 0 1 .126.214v7.635c0 .089-.048.17-.126.214l-6.715 3.819a.25.25 0 0 1-.126.032.3.3 0 0 1-.125-.032l-6.715-3.815a.25.25 0 0 1-.126-.215V8.182c0-.089.048-.17.126-.215l6.715-3.818a.26.26 0 0 1 .125-.034m0-1.115c-.238 0-.478.06-.692.183L4.593 7A1.36 1.36 0 0 0 3.9 8.182v7.635c0 .487.264.938.693 1.181l6.714 3.819a1.41 1.41 0 0 0 1.386 0l6.714-3.818a1.36 1.36 0 0 0 .693-1.182V8.182A1.36 1.36 0 0 0 19.407 7l-6.716-3.817A1.4 1.4 0 0 0 11.998 3" />
                  <path fill="#213147" d="m7.559 18.685.617-1.666 1.244 1.018-1.163 1.046z" />
                  <path fill="#fff" d="M11.433 7.635H9.731a.3.3 0 0 0-.285.197l-3.649 9.852 1.761 1.001 4.018-10.849a.15.15 0 0 0-.143-.2m2.979-.001h-1.703a.3.3 0 0 0-.284.197l-4.167 11.25 1.761 1 4.535-12.246a.15.15 0 0 0-.142-.2" />
                </svg>


              </li>
              <li title='Optimism'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path fill="#FE0420" d="M3.966 15.8q.979.7 2.512.7 1.854 0 2.962-.838 1.108-.85 1.559-2.562.27-1.05.464-2.163.063-.398.064-.663 0-.874-.451-1.499a2.7 2.7 0 0 0-1.237-.95Q9.053 7.5 8.062 7.5q-3.644 0-4.52 3.437a40 40 0 0 0-.477 2.163q-.058.335-.065.674 0 1.314.966 2.026m4.65-2.775c-.247.957-.926 1.58-1.958 1.58-1.02 0-1.368-.69-1.184-1.58a27 27 0 0 1 .464-2.05c.265-1.034.89-1.58 1.956-1.58 1.017 0 1.348.68 1.173 1.58a30 30 0 0 1-.451 2.05m3.902 3.385q.076.09.214.089h1.704a.38.38 0 0 0 .238-.089.36.36 0 0 0 .138-.232l.538-2.52h1.733c1.094 0 1.95-.53 2.576-1.002q.953-.707 1.266-2.186.075-.348.075-.67 0-1.117-.851-1.71-.84-.591-2.23-.591h-3.333a.38.38 0 0 0-.238.09.38.38 0 0 0-.138.232l-1.73 8.356a.3.3 0 0 0 .038.232m6.09-5.966c-.157.689-.757 1.319-1.462 1.319h-1.44l.496-2.369h1.503c.512 0 .94.102.94.665q0 .165-.037.385" />
                </svg>
              </li>
              <li title='Base'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path fill="#0052FF" d="M11.984 21C16.964 21 21 16.97 21 12s-4.036-9-9.016-9C7.26 3 3.384 6.627 3 11.244h11.917v1.513H3C3.385 17.373 7.26 21 11.984 21" />
                </svg>
              </li>
              <li title='Polygon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                  <path fill="url(#polygon__a)" d="m16.364 15.217 4.27-2.435a.73.73 0 0 0 .366-.627V7.284a.72.72 0 0 0-.366-.627l-4.27-2.435a.74.74 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v8.704l-2.994 1.707-2.994-1.707v-3.415l2.994-1.707 1.974 1.127V9.702l-1.608-.918a.75.75 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v4.87c0 .258.14.498.366.627l4.27 2.436a.75.75 0 0 0 .732 0l4.27-2.436a.72.72 0 0 0 .366-.626V8.012l.053-.03 2.94-1.677 2.994 1.707v3.415l-2.994 1.707-1.972-1.124v2.291l1.606.916a.75.75 0 0 0 .732 0z" />
                  <defs>
                    <linearGradient id="polygon__a" x1="2.942" x2="20.119" y1="17.194" y2="7.101" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A726C1" />
                      <stop offset=".88" stopColor="#803BDF" />
                      <stop offset="1" stopColor="#7B3FE4" />
                    </linearGradient>
                  </defs>
                </svg>


              </li>
            </ul>
          </div>
          {/* Contact us Column */}
          <div className='flex flex-col items-center'>
            <h2 className="border-b-2 border-gray-200 mb-2 pb-1 text-lg text-gray-800 font-semibold">
              Contact us
            </h2>
            <ul className="flex gap-4 flex-wrap justify-center mt-5">
              <li>
                <a href={`${faceboolk?.global_value}`} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1877F2" className="bi bi-facebook hover:scale-110 transition-transform duration-700" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={`${twitter?.global_value}`} target="_blank">
                  <svg width="30" height="30" fill="black" className="bi bi-twitter-x hover:scale-110 transition-transform duration-700" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </li>
              {/* <li>
                <a href={`${youtube?.global_value}`} target="_blank">
                  <YouTubeIcon className="text-gray-600 hover:text-gray-800" />
                </a>
              </li> */}
              <li>
                <a href={`${instagram?.global_value}`} target="_blank">
                  <svg className='hover:scale-110 transition-transform duration-700' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f58529" />
                        <stop offset="30%" stopColor="#dd2a7b" />
                        <stop offset="60%" stopColor="#8134af" />
                        <stop offset="100%" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#instagram-gradient)"
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <p className="text-center text-sm text-gray-500 mt-5">
          COPYRIGHT © 2025 CARNOBOΝ™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
