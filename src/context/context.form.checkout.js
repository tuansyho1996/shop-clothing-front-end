'use client'
import { createContext, useState, useEffect, useRef } from 'react';

export const FormCheckoutContext = createContext();


export function FormCheckoutProvider({ children }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartmentSuite, setApartmentSuite] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Alabama');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null)
  const [flagCurrent, setFlagCurrent] = useState('US')
  const [currentPhoneCode, setCurrentPhoneCode] = useState('1')
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const firstNameRef = useRef(firstName);
  const lastNameRef = useRef(lastName);
  const addressRef = useRef(address);
  const apartmentSuiteRef = useRef(apartmentSuite);
  const cityRef = useRef(city);
  const stateRef = useRef(state);
  const zipRef = useRef(zip);
  const countryRef = useRef(country);
  const phoneRef = useRef(phone);
  const emailRef = useRef(email);
  const flagCurrentRef = useRef(flagCurrent);
  useEffect(() => {
    firstNameRef.current = firstName;
  }, [firstName]);
  useEffect(() => {
    lastNameRef.current = lastName;
  }, [lastName]);
  useEffect(() => {
    addressRef.current = address;
  }, [address]);
  useEffect(() => {
    apartmentSuiteRef.current = apartmentSuite;
  }, [apartmentSuite]);
  useEffect(() => {
    cityRef.current = city;
  }, [city]);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    zipRef.current = zip;
  }, [zip]);
  useEffect(() => {
    countryRef.current = country;
    stateRef.current = state;
  }, [country, state]);
  useEffect(() => {
    phoneRef.current = phone;
  }, [phone]);
  useEffect(() => {
    emailRef.current = email;
  }, [email]);
  useEffect(() => {
    flagCurrentRef.current = flagCurrent;
  }, [flagCurrent]);
  return (
    <FormCheckoutContext.Provider value={{
      firstName, setFirstName, firstNameRef,
      lastName, setLastName, lastNameRef,
      address, setAddress, addressRef,
      apartmentSuite, setApartmentSuite, apartmentSuiteRef,
      city, setCity, cityRef,
      state, setState, stateRef,
      zip, setZip, zipRef,
      country, setCountry, countryRef,
      phone, setPhone, phoneRef,
      showTooltip, setShowTooltip,
      currentCountry, setCurrentCountry,
      flagCurrent, setFlagCurrent, flagCurrentRef,
      currentPhoneCode, setCurrentPhoneCode,
      email, setEmail, emailRef,
      formErrors, setFormErrors
    }}>
      {children}
    </FormCheckoutContext.Provider>
  );
}
