// pages/create-account.js
'use client'
import { createUser } from '@/services/service.user';
import React, { useContext, useState } from 'react';
import { AppContext } from '@/context/context.app';
import { useRouter } from 'next/navigation'

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    usr_first_name: '',
    usr_last_name: '',
    usr_email: '',
    usr_password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter()
  const { user, setUser } = useContext(AppContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    if (!formData.usr_email || !formData.usr_password) {
      setError('Email and password are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.usr_email)) {
      setError('Invalid email format.');
      return false;
    }
    setError('');
    return true;
  };
  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      const res = await createUser(formData)
      setUser(res?.metadata?.user)
      localStorage.setItem('user', JSON.stringify(res?.metadata?.user));
      router.push('/account')
    } catch (error) {
      if (error && error.status === 403) {
        setError('Email already exists.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }

    // Add form submission logic here
  };

  return (
    <div className="flex items-center justify-center py-24 px-4 ">
      <div
        className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <div className="text-2xl font-bold text-center mb-6">Create Account</div>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <input
          type="text"
          name="usr_first_name"
          placeholder="First Name"
          value={formData.usr_first_name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="usr_last_name"
          placeholder="Last Name"
          value={formData.usr_last_name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="usr_email"
          placeholder="Email"
          value={formData.usr_email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="usr_password"
          placeholder="Password"
          value={formData.usr_password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full py-2 text-white font-bold bg-yellow-500 rounded-lg hover:bg-yellow-600"
          onClick={handleSubmit}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
