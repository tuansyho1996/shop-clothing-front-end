// components/LoginForm.js
'use client'
import { useState, useContext } from "react";
import { login } from "@/services/service.user";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { AppContext } from "@/context/context.app";

export default function LoginForm() {
  const [usr_email, setEmail] = useState("");
  const [usr_password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const { setUser } = useContext(AppContext)

  const notify = () => toast.success("Login successful!");
  const validateForm = () => {
    if (!usr_email || !usr_password) {
      setError('Email and password are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usr_email)) {
      setError('Invalid email format.');
      return false;
    }
    setError(null);
    return true;
  };
  console.log(error)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Frontend validation
    if (!validateForm()) return;
    setLoading(true);
    try {
      // Mock API request (replace with your actual API endpoint)
      const res = await login({ usr_email, usr_password })
      // Handle successful login (e.g., redirect)
      setUser(res?.metadata?.user)
      localStorage.setItem('user', JSON.stringify(res?.metadata?.user));
      notify()
      router.push('/account')
    } catch (err) {
      if (err.status === 403) {
        setError('Email is not exist.');
      } else if (err.status === 401) {
        setError('Password is not valid.');
      } else if (err.status === 500) {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-24 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <div className="text-red-600 text-center p-2 border border-red-500 rounded bg-red-100">
            {error}
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="usr_email"
            placeholder="Enter your email"
            value={usr_email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={usr_password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-yellow-500 text-white py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-600"
            }`}
          disabled={loading}
        >
          {loading ? "Signing In..." : "SIGN IN"}
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          {/* <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>{" "}
          /{" "} */}
          <a href="/sign-up" className="text-blue-500 hover:underline">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}
