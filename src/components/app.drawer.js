// components/Drawer.js
'use client'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { AppContext } from '@/context/context.app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';


export default function Drawer({ isOpen, onClose, items }) {
  const { productsInCart, setProductsInCart, setDrawerOpen } = useContext(AppContext)
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => {
    const newSubTotal = productsInCart.reduce((acc, el) => acc + (el.product_count * el.product_price), 0)
    setSubtotal(newSubTotal)
  }, [productsInCart])
  const handleMinusItem = (index) => {
    let copyItems = [...items]
    copyItems[index].product_count -= 1
    copyItems = copyItems.filter(el => el.product_count !== 0)
    setProductsInCart(copyItems)
  }
  const handlePlusItem = (index) => {
    const copyItems = [...items]
    copyItems[index].product_count += 1
    setProductsInCart(copyItems)
  }
  const handleRemoveItem = (index) => {
    const copyItems = [...items]
    copyItems.splice(index, 1)
    setProductsInCart(copyItems)

  }
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[75vw] md:w-[50vw] transform bg-white transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center border-b pb-4">
            <p className="text-4xl p-5 font-bold">Cart</p>
            <button onClick={onClose}>
              <CloseIcon sx={{ '&:hover': { color: 'var(--accent-color)' } }} className="w-6 h-6" />
            </button>
          </div>
          {items.length === 0 ?
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-lg font-semibold">Your cart is empty</p>
              <Link href='/shop/1'>
                <button className="mt-4 w-full text-white p-2 bg-[var(--primary-color)] hover:bg-[var(--accent-color)] rounded" onClick={() => setDrawerOpen(false)}>
                  Go Shopping
                </button>
              </Link>
            </div>
            :
            <>
              <div className="max-h-[50vh] overflow-y-auto mt-4 space-y-4">
                {items.map((item, index) => (
                  <div key={index} className=" flex justify-between">
                    <div className=' w-full basis-40'>
                      <Image
                        src={item.product_image}
                        alt=''
                        width={160}
                        height={160}
                        style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                        loadding='lazy'
                      />
                    </div>
                    <div className="basis-1/2 text-lg overflow-hidden">
                      <p className="font-semibold truncate-2-lines">{item.product_name}</p>
                      <p className="">{item.product_price}<span style={{ color: '#999' }}> X {item.product_count}</span></p>
                      <p className=" ">Color: {item.product_color}</p>
                      <p className=" ">Size: {item.product_size}</p>
                    </div>
                    <div className='flex flex-col 2xl:flex-row cursor-pointer justify-center '>
                      <AddIcon sx={{ color: '#999999', '&:hover': { color: 'var(--accent-color)', }, fontSize: { xs: 24, sm: 30, md: 36 } }} onClick={() => handlePlusItem(index)} />
                      <RemoveIcon sx={{ color: '#999999', '&:hover': { color: 'var(--accent-color)', }, fontSize: { xs: 24, sm: 30, md: 36 } }} onClick={() => handleMinusItem(index)} />
                      <DeleteIcon sx={{ color: '#999999', '&:hover': { color: 'var(--accent-color)', }, fontSize: { xs: 24, sm: 30, md: 36 } }} onClick={() => handleRemoveItem(index)} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>${subtotal} USD</span>
                </div>
                <Link href='/cart'>
                  <button className="mt-4 w-full bg-[var(--primary-color)] hover:text-black text-white py-2 rounded" onClick={() => setDrawerOpen(false)}>
                    Go to Cart
                  </button>
                </Link>
                <Link href='/checkout'>
                  <button className="mt-2 w-full bg-[var(--accent-color)] hover:text-black text-white py-2 rounded" onClick={() => setDrawerOpen(false)}>
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          }

        </div>
      </div>
    </>
  );
}
