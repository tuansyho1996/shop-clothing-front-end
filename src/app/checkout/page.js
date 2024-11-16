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

const urlsImagePayment = [
  'https://d2jfx0w9sp915a.cloudfront.net/688f44a2252909f5c0859e89e5eb08e5',
  'https://d2jfx0w9sp915a.cloudfront.net/3e92597d36745b4e0781a09d539e1800',
  'https://d2jfx0w9sp915a.cloudfront.net/1de7fa3b883fcd1a206aae02fc5b2fdb',
  'https://d2jfx0w9sp915a.cloudfront.net/769c3e2067d0847855aa0aa50b3a8040',
  'https://d2jfx0w9sp915a.cloudfront.net/dd191d2fb4b88180dce5cc9692a5af19',
  'https://d2jfx0w9sp915a.cloudfront.net/4e34200d00bb5dcf603c76150b845db4'
]

export default function Checkout() {
  const { productsInCart, setProductsInCart, subtotal } = useContext(AppContext)
  const [email, setEmail] = useState('');

  const [discountCode, setDiscountCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState('Worldwide Flat Rate');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [rememberInfo, setRememberInfo] = useState(false);

  const [hiddenOrder, setHiddenOrder] = useState(false)
  const [hiddenOrderBill, setHiddenOrderBill] = useState(true)

  const [useAddressShippingCC, setUseAddressShippingCC] = useState(true)
  const [useAddressShippingPP, setUseAddressShippingPP] = useState(false)

  useEffect(() => {

  }, [])

  const shipping = 4.69
  const handleApplyDiscount = () => {
    // Logic to apply discount
  };

  const handleCheckout = () => {
    // Logic to process checkout
  };
  return (
    <div className="max-w-5xl 2xl:max-w-7xl mx-auto md:px-4 py-8 flex flex-col md:flex-row gap-4">
      {/* Left Column */}
      <div className="md:basis-7/12 md:order-first px-6 md:px-0 space-y-6">
        {/* Express Checkout */}
        {/* <div>
          <div className="text-lg font-semibold mb-4">Express checkout</div>
          <div className="flex gap-4">
            <div className="bg-yellow-500 text-white px-4 py-2 rounded basis-1/2 h-14 flex items-center justify-center">
              <div className=''>
                <Image
                  src='https://d2jfx0w9sp915a.cloudfront.net/b921dc9a96b5974ff96fcbce91c8e49b'
                  height={70}
                  width={70} // Auto width to maintain aspect ratio
                  style={{ width: 'auto', height: '100%' }} // Ensure width is auto to maintain aspect ratio
                  loading='lazy'
                  alt=''
                />
              </div>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded w-full basis-1/2 h-14 flex items-center justify-center">
              <div className=''>
                <Image
                  src='https://d2jfx0w9sp915a.cloudfront.net/ec0cb9187662831c48424a07664114b7'
                  height={56}
                  width={56} // Auto width to maintain aspect ratio
                  style={{ width: 'auto' }}
                  loading='lazy'
                  alt=''
                />
              </div>
            </div>
          </div>
          <hr className="my-6" />
        </div> */}
        {/* Contact Form */}
        <div>
          <div className="text-lg font-semibold mb-4 uppercase">Contact</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border p-3 rounded mb-2"
          />
        </div>
        {/* Delivery Form */}
        <div className="text-lg font-semibold mb-4 uppercase">Billing details</div>
        <Delivery />
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2"
            checked={useAddressShippingPP}
            onChange={(e) => setUseAddressShippingPP(e.target.checked)}
          /> Ship to a different address?
        </label>
        {
          useAddressShippingPP &&
          <>
            <Delivery isPhone={false} />

          </>
        }
        {/* Shipping Method */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
          <div className="border rounded p-4">
            <label className="flex justify-between items-center">
              <span>Worldwide Flat Rate</span>
              <span className="font-semibold">$11.99</span>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === 'Worldwide Flat Rate'}
                onChange={() => setShippingMethod('Worldwide Flat Rate')}
                className="hidden"
              />
            </label>
          </div>
        </div> */}
        {/* payment Method */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-4">Payment</h2>
          <p className="text-gray-600 mb-4">All transactions are secure and encrypted.</p>
          <div className="border rounded-sm space-y-4">
            <label className={`flex p-4 items-center justify-between space-x-3  ${paymentMethod === 'creditCard' ? 'border-2 border-accent-color rounded-sm' : ''}`}>
              <div className='flex items-center gap-2'>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>Credit card</span>
              </div>
              <div className='flex gap-1'>
                {
                  urlsImagePayment.length > 0 &&
                  urlsImagePayment.slice(0, 3).map((el, index) => (
                    <div key={index}>
                      <Image
                        src={el}
                        width={48}
                        height={48}
                        style={{ width: '100%', height: 'auto' }} // Ensure width is auto to maintain aspect ratio
                        loading='lazy'
                        alt=''
                      />
                    </div>
                  ))
                }
                <div className="relative group inline-flex items-center">
                  <div className="ml-2 relative">
                    <div className="flex items-center justify-center w-10 h-6 bg-gray-200 rounded-full text-sm font-semibold cursor-pointer">
                      +3
                    </div>

                    <div className="absolute bottom-full mt-2 justify-between items-center hidden group-hover:flex bg-black text-white p-2 mb-3 w-[200px] rounded-lg z-10 right-[-40px] md:left-1/2 md:transform md:-translate-x-1/2 ">
                      {
                        urlsImagePayment.length > 0 &&
                        urlsImagePayment.slice(3).map((el, index) => (
                          <div key={index}>
                            <Image
                              src={el}
                              width={48}
                              height={48}
                              style={{ width: '100%', height: 'auto' }} // Ensure width is auto to maintain aspect ratio
                              loading='lazy'
                              alt=''
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <div className='bg-gray-200  rounded-sm' style={{ marginTop: '0px' }}>
              {paymentMethod === 'creditCard' && (
                <div className="space-y-3 p-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full border p-3 rounded"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                      className="w-full border p-3 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Security code"
                      className="w-full border p-3 rounded"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full border p-3 rounded"
                  />
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2"
                      checked={useAddressShippingCC}
                      onChange={(e) => setUseAddressShippingCC(e.target.checked)}
                    /> Use shipping address as billing address
                  </label>
                  {
                    !useAddressShippingCC &&
                    <>
                      <div className="text-lg font-semibold mb-4">Billing address</div>
                      <Delivery />

                    </>
                  }
                </div>
              )}
            </div>
            <label className={`flex p-4 items-center justify-between space-x-3 ${paymentMethod === 'paypal' ? 'border-2 border-accent-color rounded-sm' : ''}`} style={{ marginTop: '0px' }}>
              <div className='flex items-center gap-2'>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="form-radio h-4 w-4 text-blue-600 border-accent-color"
                />
                <span>PayPal</span>
              </div>
              <div className='h-12 flex items-center'>
                <Image
                  src='https://d2jfx0w9sp915a.cloudfront.net/29cd1484bc2ff2f4a45c96205ef5e074'
                  width={128}
                  height={48}
                  style={{ width: '100%', height: 'auto' }} // Ensure width is auto to maintain aspect ratio
                  loading='lazy'
                  alt=''
                />
              </div>
            </label>
            <div className='bg-gray-200 rounded-sm ' style={{ marginTop: '0px' }}>
              {
                paymentMethod === 'paypal' &&
                <div className='space-y-3 p-4'>
                  <div className="flex flex-col items-center justify-center p-4 md:p-6  rounded-lg text-center">
                    <div className="text-gray-500 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 -7 64 64"
                        width="150"
                        height="140"
                        class="text-gray-500"
                      >
                        <rect x="4" y="8" width="40" height="30" fill="none" stroke="currentColor" stroke-width="2" />
                        <line x1="4" y1="12" x2="44" y2="12" stroke="currentColor" stroke-width="2" />
                        <circle cx="8" cy="10" r="1" fill="currentColor" />
                        <circle cx="12" cy="10" r="1" fill="currentColor" />
                        <circle cx="16" cy="10" r="1" fill="currentColor" />
                        <line x1="44" y1="23" x2="58" y2="23" stroke="currentColor" stroke-width="2" />
                        <line x1="54" y1="20" x2="58" y2="23" stroke="currentColor" stroke-width="2" />
                        <line x1="54" y1="26" x2="58" y2="23" stroke="currentColor" stroke-width="2" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base px-2">
                      After clicking <strong>"Pay with PayPal"</strong>, you will be redirected to PayPal to complete your purchase securely.
                    </p>
                  </div>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2"
                      checked={useAddressShippingPP}
                      onChange={(e) => setUseAddressShippingPP(e.target.checked)}
                    /> Use shipping address as billing address
                  </label>
                  {
                    !useAddressShippingPP &&
                    <>
                      <div className="text-lg font-semibold mb-4">Billing address</div>
                      <Delivery />

                    </>
                  }

                </div>
              }
            </div>


          </div>

          <hr className="my-6" />


        </div> */}
        {/* Right Column (Order Summary and Checkout Button) */}
        {/* <div className='md:hidden'>
          <div className="group flex justify-between p-6 items-center font-semibold text-lg cursor-pointer md:hidden bg-gray-200" onClick={() => setHiddenOrderBill(!hiddenOrderBill)}>
            <div className="text-lg font-semibold">Order Summary</div>
            {
              hiddenOrderBill ?
                <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Show  <KeyboardArrowDownIcon /></div> :
                <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Hide  <KeyboardArrowUpIcon /></div>
            }
          </div>
          <div className={`${hiddenOrderBill ? 'hidden' : 'block'} md:block py-6`}>
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
              className="w-full border p-3 rounded mt-4 basis-3/4 "
            />
            <button onClick={handleApplyDiscount} className="w-full bg-gray-200 py-2 mt-4 rounded text-gray-700 basis-1/4">Apply</button>

          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Subtotal</p>
            <p>${subtotal} USD</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Shipping</p>
            <p>${shipping} USD</p>
          </div>
          <div className="flex justify-between items-center font-semibold text-lg">
            <p>Total</p>
            <p>USD $ {subtotal + shipping}</p>
          </div>
        </div> */}

      </div>
      {/* Right Column */}
      <div className="bg-gray-100 md:basis-5/12 mt-6 md:mt-0 ">
        <div className='md:sticky md:top-4'>
          <div className="group flex justify-between p-6 items-center font-semibold text-lg cursor-pointer md:hidden " onClick={() => setHiddenOrder(!hiddenOrder)}>
            <p>Order summary</p>
            {
              hiddenOrder ?
                <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Show<KeyboardArrowDownIcon /></div> :
                <div className='group-hover:text-[#9c43db] text-base font-light text-accent-color'>Hide<KeyboardArrowUpIcon /></div>
            }
          </div>
          <div className={` px-6 md:py-6`}>
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
              <p>${subtotal} USD</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Shipping</p>
              <p>${shipping} USD</p>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg">
              <p>Total</p>
              <p>USD $ {subtotal + shipping}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg space-y-4 mt-6 md:mt-0">
            <PayPalButton />
            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
              <a href="#" className="underline text-blue-600">Terms of Service</a> and{' '}
              <a href="#" className="underline text-blue-600">Privacy Policy</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
