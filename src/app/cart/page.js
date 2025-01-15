// pages/cart.js
'use client'
import { useState } from 'react';
import { AppContext } from '@/context/context.app';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const { productsInCart, setProductsInCart, subtotal } = useContext(AppContext)
  // Example item in the cart

  const handleMinusItem = (index) => {
    let copyproductsInCart = [...productsInCart]
    copyproductsInCart[index].product_count -= 1
    copyproductsInCart = copyproductsInCart.filter(el => el.product_count !== 0)
    setProductsInCart(copyproductsInCart)
  }
  const handlePlusItem = (index) => {
    const copyproductsInCart = [...productsInCart]
    copyproductsInCart[index].product_count += 1
    setProductsInCart(copyproductsInCart)
  }
  const handleRemoveItem = (index) => {
    const copyproductsInCart = [...productsInCart]
    copyproductsInCart.splice(index, 1)
    setProductsInCart(copyproductsInCart)

  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your cart</h1>
      <div className="border-t border-gray-300">
        {
          productsInCart.length > 0 ?
            productsInCart.map((el, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
                <div className="flex items-center w-full md:w-auto">
                  <div className='basis-40 flex-none'>
                    <Image
                      src={el.product_image}
                      alt=''
                      width={160}
                      height={160}
                      style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                      loadding='lazy'
                    />
                  </div>
                  <div className=''>
                    <p className="font-semibold truncate-2-lines">{el.product_name}</p>
                    <p className="text-gray-500">{el.product_color} / {el.product_size}</p>
                    <p className="text-gray-500">${el.product_price} USD</p>
                    <button onClick={() => handleRemoveItem(index)} className="text-red-600 mt-2 text-sm">Remove</button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => handleMinusItem(index)}
                      className="px-3 py-1 text-gray-600"
                    >-</button>
                    <span className="px-3">{el.product_count}</span>
                    <button
                      onClick={() => handlePlusItem(index)}
                      className="px-3 py-1 text-gray-600"
                    >+</button>
                  </div>
                  <p className="font-semibold">${el.product_count * el.product_price} USD</p>
                </div>
              </div>
            ))
            :
            <span>Your cart is currently empty.</span>
        }
        <hr className="my-4" />

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">Subtotal</p>
          <p className="text-lg font-bold">${subtotal} USD</p>
        </div>
        <p className="text-gray-500 text-sm text-right mt-1">
          Shipping calculated at checkout
        </p>

        <Link href='/checkout' >
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 mt-6 rounded">
            CHECK OUT
          </button>
        </Link>
      </div>
    </div>
  );
}
