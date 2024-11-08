// pages/index.js
import { useEffect, useState } from 'react';
import countryState from '@/app/checkout/output';
import CustomInput from '../ui/ui.custom.input';

export default function Delivery() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null)


  const formatPhoneNumber = (value) => {
    // Optional: Format the phone number as (XXX) XXX-XXXX
    if (value[0] === '+') {
      return value = '+' + value.slice(1).replace(/\D/g, '').replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (_, g1, g2, g3) =>
        `${g1 ? '(' + g1 + ')' : ''}${g2 ? '-' + g2 : ''}${g3 ? '-' + g3 : ''}`
      ); // Allow only numbers after the '+'
    }
    else {
      return value = value
        .replace(/\D/g, '') // Remove non-numeric characters
        .replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (_, g1, g2, g3) =>
          `${g1 ? g1 : ''}${g2 ? '-' + g2 : ''}${g3 ? '-' + g3 : ''}`
        ); // Format as (XXX) XXX-XXXX
    }
  }
  const handleChangePhone = (value) => {
    const formatedValue = formatPhoneNumber(value)
    setPhone(formatedValue)
  }
  useEffect(() => {
    setCurrentCountry(countryState.find(el => el.name === country))
  }, [country])

  console.log(state)
  return (
    <>
      <div className="relative rounded-md border border-gray-200 flex">
        <label className={`${country ? 'block' : 'hidden'} text-sm pl-4 text-light text-gray-500 absolute top-0 left-0`}>Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${country ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-md outline-none w-full`} placeholder="Country"
        >
          {
            countryState.map(el => (
              <option value={el.name}>{el.name}</option>
            ))
          }
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CustomInput value={firstName} placeholder='First name' label='First name' handleChangeValue={(e) => setFirstName(e)} />
        <CustomInput value={lastName} placeholder='Last name' label='Last name' handleChangeValue={(e) => setLastName(e)} />
      </div>
      <CustomInput value={address} placeholder='Address' label='Address' handleChangeValue={(e) => setAddress(e)} />
      <CustomInput value={city} placeholder='City' label='City' handleChangeValue={(e) => setCity(e)} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative rounded-md border border-gray-200 flex">
          <label className={`${state ? 'block' : 'hidden'} text-sm pl-4 text-light text-gray-500 absolute top-0 left-0`}>State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`${state ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-md outline-none w-full`} placeholder="State"
          >
            {
              currentCountry &&
              currentCountry.states.map(el => (
                <option value={el.name}>{el.name}</option>
              ))
            }
          </select>
        </div>
        <CustomInput value={zip} placeholder='ZIP code' label='Zip code' handleChangeValue={(e) => setZip(e)} />
      </div>
      <div className="flex items-center rounded-md border border-gray-200 flex">
        <div className=" basis-10/12 relative">
          <label className={`${phone ? 'block' : 'hidden'} text-sm pl-3 text-light text-gray-500 absolute top-0 left-0`}>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => handleChangePhone(e.target.value)}
            pattern="^\(\d{3}\) \d{3}-\d{4}$"
            className={`${phone ? 'pt-4 pb-2 px-3' : 'p-3'} rounded-md outline-none w-full`} placeholder="Phone" />
        </div>
        <span
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="ml-1 text-gray-400 cursor-pointer relative"
        >
          ?
          {showTooltip && (
            <div className="absolute top-full mt-2 right-0 w-48 p-2 bg-black text-white text-xs rounded-md shadow-lg z-10">
              In case we need to contact you about your order
            </div>
          )}
        </span>
      </div>
    </>
  );
}
