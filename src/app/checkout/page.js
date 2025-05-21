// pages/checkout.js
'use client'
import { useEffect, useState } from 'react';
import { AppContext } from '@/context/context.app';
import { useContext } from 'react';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Delivery from '@/components/checkout/checkout.delivery';
import PayPalButton from '@/components/paypal';
import { FormCheckoutProvider } from '@/context/context.form.checkout';
import Link from 'next/link';


const SpinnerOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default function Checkout() {

  const { productsInCart, subtotal, shipping } = useContext(AppContext)

  const [discountCode, setDiscountCode] = useState('');

  const [hiddenOrder, setHiddenOrder] = useState(false)

  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, [])

  const handleApplyDiscount = () => {
    // Logic to apply discount
  };

  const handleCheckout = () => {
    // Logic to process checkout
  };
  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      {loading && <SpinnerOverlay />}
      <FormCheckoutProvider>
        <div className="max-w-5xl 2xl:max-w-7xl mx-auto md:px-4 py-8 flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="md:basis-7/12 md:order-first px-6 md:px-0 space-y-6 ">
            {/* Delivery Form */}
            <div className='md:sticky md:top-4'>
              <div className="text-xl font-semibold mb-4 uppercase ">Billing details</div>

              <Delivery />

            </div>

          </div>
          {/* Right Column */}
          <div className="bg-gray-100 md:basis-5/12 mt-6">
            <div className='md:sticky md:top-4'>
              <div className="group flex justify-between p-6 items-center font-semibold text-lg cursor-pointer md:hidden " onClick={() => setHiddenOrder(!hiddenOrder)}>
                <p>Order summary</p>
                {
                  hiddenOrder ?
                    <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Show<KeyboardArrowDownIcon /></div> :
                    <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Hide<KeyboardArrowUpIcon /></div>
                }
              </div>
              <div className={`px-5 mb-5 md:mb-0 md:py-5`}>
                {/* Order Summary */}
                <div className={`${hiddenOrder ? 'hidden' : 'block'} md:block`}>
                  {
                    productsInCart.length > 0 &&
                    productsInCart.map((el, index) => (
                      <div key={index} className="flex justify-between items-center gap-1">
                        <div className="flex items-center space-x-4">
                          <div className='basis-24 flex-none relative'>
                            <Image
                              src={el.product_image}
                              alt=''
                              width={96}
                              height={96}
                              style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                              loadding='lazy'
                            />
                            <span className="absolute top-[-5px] right-[-5px] bg-gray-500 text-white text-xs rounded-full px-2 py-1 opacity-75">{el.product_count}</span>
                          </div>
                          <div>
                            <p className="font-semibold truncate-2-lines">{el.product_name}</p>
                            <p className="text-gray-500">{el.product_color} / {el.product_size}</p>
                          </div>
                        </div >
                        <p className="flex-none">${el.product_price} USD</p>
                      </div>

                    ))
                  }
                </div>
                <div className='flex gap-1'>
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Discount code or gift card "
                    className="w-full border p-3 rounded mt-4 basis-3/4"
                  />
                  <button onClick={handleApplyDiscount} className="w-full bg-gray-200 py-2 mt-4 rounded text-gray-700 basis-1/4">Apply</button>

                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-600">Subtotal</p>
                  <p>${subtotal.toFixed(2)} USD</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Shipping</p>
                  <p>${shipping.toFixed(2)} USD</p>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg">
                  <p>Total</p>
                  <p>USD $ {(subtotal + shipping).toFixed(2)}</p>
                </div>
              </div>
              <hr className="border-t border-gray-300 mx-5" />
              <div className="bg-gray-100 p-5 rounded-lg space-y-4 md:mt-0">
                <PayPalButton setLoading={setLoading} />
                <p className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                  <Link href="/shipping-and-policy" target='_blank' className="underline text-blue-600">Terms of Service</Link> and{' '}
                  <Link href="/privacy-policy" target='_blank' className="underline text-blue-600">Privacy Policy</Link>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </FormCheckoutProvider>
    </>
  );
}
