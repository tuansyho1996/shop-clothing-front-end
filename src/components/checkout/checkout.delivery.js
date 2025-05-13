// pages/index.js
import { useContext, useEffect, useState } from 'react';
import countryState from '@/app/checkout/countries';
import CustomInput from '../ui/ui.custom.input';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormCheckoutContext } from '@/context/context.form.checkout';

export default function Delivery({ isPhone = true }) {

  const { firstName, setFirstName,
    lastName, setLastName,
    address, setAddress,
    apartmentSuite, setApartmentSuite,
    city, setCity,
    state, setState,
    zip, setZip,
    country, setCountry,
    phone, setPhone,
    showTooltip, setShowTooltip,
    currentCountry, setCurrentCountry,
    flagCurrent, setFlagCurrent,
    currentPhoneCode, setCurrentPhoneCode,
    email, setEmail,
    formErrors, } = useContext(FormCheckoutContext)

  const formatPhoneNumber = (value) => {
    // Optional: Format the phone number as (XXX) XXX-XXXX
    return value = value
      .replace(/\D/g, '') // Remove non-numeric characters
      .replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (_, g1, g2, g3) =>
        `${g1 ? g1 : ''}${g2 ? '-' + g2 : ''}${g3 ? '-' + g3 : ''}`
      ); // Format as (XXX) XXX-XXXX
  }
  const handleChangePhone = (value) => {
    const formatedValue = formatPhoneNumber(value)
    setPhone(formatedValue)
  }
  useEffect(() => {
    setCurrentCountry(countryState.find(el => el?.name === country))
    setFlagCurrent(countryState.find(el => el?.name === country).iso2)
    setCurrentPhoneCode(`${countryState.find(el => el?.name === country).phone_code}`)
    setState(countryState.find(el => el?.name === country)?.states[0]?.name)
  }, [country])
  useEffect(() => {
    setCurrentPhoneCode(`${countryState.find(el => el?.iso2 === flagCurrent).phone_code}`)
  }, [flagCurrent])
  useEffect(() => {
    handleChangePhone
  }, [currentPhoneCode])
  return (
    <form>
      <div className='mb-4'>
        <div className="text-lg font-semibold mb-2 uppercase">Contact</div>
        <p className="text-red-500 text-sm">{formErrors.email}</p>
        <CustomInput value={email} type="email" placeholder='Email' label='Email' handleChangeValue={(e) => setEmail(e)} />
        <hr className='mt-4' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className='flex flex-col justify-end'>
          <p className="text-red-500 text-sm">{formErrors.firstName}</p>
          <CustomInput value={firstName} placeholder='First name' label='First name' handleChangeValue={(e) => setFirstName(e)} />
        </div>
        <div className='flex flex-col justify-end'>
          <p className="text-red-500 text-sm">{formErrors.lastName}</p>
          <CustomInput value={lastName} placeholder='Last name' label='Last name' handleChangeValue={(e) => setLastName(e)} />
        </div>
      </div>
      <p className="text-red-500 text-sm">{formErrors.country}</p>
      <div className="relative rounded-sm border border-gray-200 mb-4 flex focus-within:shadow-md">
        <label className={`${country ? 'block' : 'hidden'} text-sm pl-4 text-light text-gray-500 absolute top-0 left-0`}>Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${country ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-sm outline-none w-full`} placeholder="Country"
        >
          {
            countryState.map((el, index) => (
              <option key={index} value={el?.name}>{el?.name}</option>
            ))
          }
          {/* Add more countries as needed */}
        </select>
      </div>
      <p className="text-red-500 text-sm">{formErrors.address}</p>
      <div className='mb-4'>
        <CustomInput value={address} placeholder='Address' label='Address' handleChangeValue={(e) => setAddress(e)} />
      </div>
      <p className="text-red-500 text-sm">{formErrors.apartmentSuite}</p>
      <div className='mb-4'>
        <CustomInput value={apartmentSuite} placeholder='Apartment, suite, etc. (optional)' label='Apartment, suite, etc. (optional)' handleChangeValue={(e) => setApartmentSuite(e)} />
      </div>
      <p className="text-red-500 text-sm">{formErrors.city}</p>
      <div className='mb-4'>
        <CustomInput value={city} placeholder='City' label='City' handleChangeValue={(e) => setCity(e)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className='flex flex-col justify-end'>
          <p className="text-red-500 text-sm">{formErrors.state}</p>
          <div className="relative rounded-sm border border-gray-200 flex focus-within:shadow-md">
            <label className={`${state ? 'block' : 'hidden'} text-sm pl-4 text-light text-gray-500 absolute top-0 left-0`}>State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={`${state ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-sm outline-none w-full`} placeholder="State"
            >
              {
                currentCountry &&
                currentCountry.states.map((el, index) => (
                  <option key={index} value={el?.name}>{el?.name}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className='flex flex-col justify-end'>
          <p className="text-red-500 text-sm">{formErrors.zip}</p>
          <CustomInput value={zip} placeholder='ZIP code' label='Zip code' handleChangeValue={(e) => setZip(e)} />
        </div>

      </div>
      {
        isPhone &&
        <div>
          <p className="text-red-500 text-sm">{formErrors.phone}</p>
          <div className="flex items-center  rounded-sm border border-gray-200 gap-2 flex bg-white focus-within:shadow-md">
            <div className=" basis-10/12 relative ml-3">
              <label className={`${phone ? 'block' : 'hidden'} text-sm  text-light text-gray-500 absolute top-0 left-0`}>Phone</label>
              <div className='flex items-center gap-1'>
                <input
                  type='text'
                  value={`+(${currentPhoneCode})`}
                  className={`${phone ? 'pt-4 pb-2 ' : 'py-3'} bg-white outline-none w-12`}
                  disabled
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => handleChangePhone(e.target.value)}
                  pattern="^\(\d{3}\) \d{3}-\d{4}$"
                  className={`${phone ? 'pt-4 pb-2 ' : 'py-3'} outline-none w-full`} placeholder="Phone" />
              </div>

            </div>
            <span
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="ml-1 text-gray-400 cursor-pointer relative "
            >
              <span className='bg-gray-100 rounded-full px-1.5 text-gray-500 font-semibold'>?</span>
              {showTooltip && (
                <div className="absolute top-full mt-2 right-0 w-48 p-2 bg-black text-white text-xs rounded-sm shadow-lg z-10">
                  In case we need to contact you about your order
                </div>
              )}
            </span>
            <div className='w-[70px] relative '>
              <div className='flex'>
                <div style={{ width: 40, height: 'auto', position: 'relative' }}>
                  <Image
                    src={`https://flagcdn.com/w40/${flagCurrent.toLowerCase()}.png`}
                    fill
                    style={{ objectFit: 'contain' }}
                    alt=""
                    sizes='40px'
                    loading="lazy"
                  />
                </div>
                <KeyboardArrowDownIcon fontSize='small' />
              </div>
              <select
                value={flagCurrent}
                onChange={(e) => setFlagCurrent(e.target.value)}
                className='opacity-0 p-3 absolute bottom-1 /2 transform translate-y-[40%] right-0 w-[70px] cursor-pointer'
              >
                {
                  countryState.map((el, index) => (
                    <option key={index} value={el?.iso2}>
                      {el?.name} (+{el.phone_code})
                    </option>
                  ))
                }
                {/* Add more countries as needed */}
              </select>
            </div>
          </div >
        </div>

      }
    </form>
  );
}
