'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useContext, useCallback } from 'react';
import { AppContext } from '@/context/context.app';

export default function AccountPage() {
  const router = useRouter();
  const { setUser, user } = useContext(AppContext)

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    if (!userLocal) {
      router.push('/login'); // Redirect to login page
    }
  }, [router])

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  }, [router, setUser]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <p className="text-lg mb-6">
        Welcome back, <span className="capitalize">{user?.usr_first_name} {user?.usr_last_name}</span>!{' '}
        <button onClick={handleLogout} className="text-red-600 underline">
          Log out
        </button>
      </p>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Account Details</h2>
        <p className="capitalize mb-1">{user?.usr_first_name}</p>
        <p className="capitalize mb-1">{user?.usr_last_name}</p>
        {/* <p className="mb-3">United States</p> */}
        {/* <a href="/account/add-address" className="text-red-600 underline">
          Add Address
        </a> */}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <hr className="border-gray-300 mb-3" />
        {
          user?.usr_orders?.length > 0 ? (
            user.usr_orders.map((order, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">Order ID: {order._id}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">You haven't placed any orders yet.</p>
          )
        }
        <hr className="border-gray-300 mt-3" />
      </div>
    </div>
  );
}
