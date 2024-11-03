'use client'
import { createContext, useState, useEffect, useRef } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentImageDetail, setCurrentImageDetail] = useState('');
  const [currentColor, setCurrentColor] = useState('')
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [productInCart, setProductInCart] = useState([])
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setProductInCart(JSON.parse(savedCart));
    }
  }, []);
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false; // Set to false after initial render
      return; // Skip updating localStorage on initial render
    }
    localStorage.setItem('cart', JSON.stringify(productInCart));
  }, [productInCart]);
  return (
    <AppContext.Provider value={{ currentImageDetail, setCurrentImageDetail, currentColor, setCurrentColor, productInCart, setProductInCart, isDrawerOpen, setDrawerOpen }}>
      {children}
    </AppContext.Provider>
  );
}
