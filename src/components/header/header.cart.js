// pages/index.js
'use client'
import { useContext, useState } from 'react';
import Drawer from '../app.drawer';
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { AppContext } from '@/context/context.app';


export default function CartHeader() {
  const { isDrawerOpen, setDrawerOpen, productsInCart, setProductsInCart } = useContext(AppContext)

  return (
    <div className="relative">
      <button className="relative" onClick={() => setDrawerOpen(true)}>
        <ShoppingCart fontSize='large' />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">0</span>
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={productsInCart}
      />
    </div>
  );
}
