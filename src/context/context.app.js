'use client'
import { createContext, useState, useEffect, useRef } from 'react';

export const AppContext = createContext();


export function AppProvider({ children }) {
  const [currentImageDetail, setCurrentImageDetail] = useState('');
  const [currentColor, setCurrentColor] = useState('')
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [productsInCart, setProductsInCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [shipping, setShipping] = useState(0)
  const [user, setUser] = useState(null)
  const subtotaltRef = useRef(subtotal);
  const shippingRef = useRef(shipping);
  const productsInCartRef = useRef(productsInCart)
  const [reviews, setReviews] = useState('')

  useEffect(() => {
    //set cart
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setProductsInCart(JSON.parse(savedCart));
    }
    //set user
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      setUser(JSON.parse(userLocal));
    }
  }, []);
  useEffect(() => {
    const newSubTotal = productsInCart.reduce((acc, el) => acc + (el.product_count * el.product_price), 0)
    setSubtotal(newSubTotal)
  }, [productsInCart])
  useEffect(() => {
    subtotaltRef.current = subtotal;
  }, [subtotal]);
  useEffect(() => {
    shippingRef.current = shipping;
  }, [shipping]);
  useEffect(() => {
    productsInCartRef.current = productsInCart;
  }, [productsInCart]);

  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false; // Set to false after initial render
      return; // Skip updating localStorage on initial render
    }
    localStorage.setItem('cart', JSON.stringify(productsInCart));
  }, [productsInCart]);
  return (
    <AppContext.Provider value={{
      user, setUser, currentImageDetail, setCurrentImageDetail, currentColor, setCurrentColor, productsInCart, setProductsInCart, productsInCartRef,
      isDrawerOpen, setDrawerOpen, subtotal, subtotaltRef, shippingRef, shipping, reviews, setReviews
    }}>
      {children}
    </AppContext.Provider>
  );
}
