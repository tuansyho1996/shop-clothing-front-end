'use client'
import { getGlobal } from '@/services/service.global';
import { connectUser } from '@/services/service.user';
import { createContext, useState, useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';

export const AppContext = createContext();


export function AppProvider({ children }) {
  const [currentImageDetail, setCurrentImageDetail] = useState('');
  const [currentColor, setCurrentColor] = useState('')
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [productsInCart, setProductsInCart] = useState([])
  const [subtotal, setSubtotal] = useState(0.00)
  const [shipping, setShipping] = useState(0.00)
  const [user, setUser] = useState(null)
  const subtotalRef = useRef(subtotal);
  const shippingRef = useRef(shipping);
  const productsInCartRef = useRef(productsInCart)
  const [reviews, setReviews] = useState('')
  const [globals, setGlobals] = useState([])
  const [bestProducts, setBestProducts] = useState(null)
  const { address } = useAccount();
  useEffect(() => {
    //set cart
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setProductsInCart(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    const newSubTotal = productsInCart.reduce((acc, el) => acc + (el.product_count * el.product_price_eth), 0)
    setSubtotal(newSubTotal)
  }, [productsInCart])
  useEffect(() => {
    shippingRef.current = shipping;
  }, [shipping]);
  useEffect(() => {
    productsInCartRef.current = productsInCart;
  }, [productsInCart]);
  useEffect(() => {
    const getGlobals = async () => {
      const res = await getGlobal('all')
      const globals_shipping = res?.find((item) => item.global_name === 'shipping_fee')
      if (subtotalRef.current < 100) {
        setShipping(parseFloat(globals_shipping?.global_value))
      }
      setGlobals(res)
    }
    getGlobals()
  }, [])
  useEffect(() => {
    subtotalRef.current = subtotal;
    if (subtotal > 100) {
      setShipping(0)
    } else {
      const globals_shipping = globals?.find((item) => item.global_name === 'shipping_fee')
      setShipping(parseFloat(globals_shipping?.global_value))
    }
  }, [subtotal, globals]);
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false; // Set to false after initial render
      return; // Skip updating localStorage on initial render
    }
    localStorage.setItem('cart', JSON.stringify(productsInCart));
  }, [productsInCart]);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await connectUser(address);
      if (userData?.metadata) {
        setUser(userData?.metadata);
      }
    }
    if (address) {
      fetchUser();
    }
    else {
      setUser(null);
    }
  }, [address]);
  return (
    <AppContext.Provider value={{
      user, setUser, currentImageDetail, setCurrentImageDetail, currentColor, setCurrentColor, productsInCart, setProductsInCart, productsInCartRef,
      isDrawerOpen, setDrawerOpen, subtotal, subtotalRef, shippingRef, shipping, reviews, setReviews, globals, bestProducts, setBestProducts
    }}>
      {children}
    </AppContext.Provider>
  );
}
