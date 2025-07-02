'use client'

import { useState } from 'react'
import { fetchOrder } from '@/services/service.payment'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setResult(null)
    const response = await fetchOrder(orderId)
    if (!response) {
      setError('Order not found or invalid order ID.')
      return

    }
    if (response.order_info_customer.emailAddress !== email) {
      setError('Email does not match the order ID.')
      return
    }
    setResult(response)
    setOrderId('')
    setEmail('')

  }

  return (
    <div className='min-h-[500px]'>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md  ">
        <h1 className="text-xl font-bold mb-4">Track Your Order</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-accent-color text-white p-2 rounded hover:bg-[var(--primary-color)] transition-colors">
            Track Order
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {result && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <p><strong>Order ID:</strong> {result._id}</p>
            <p><strong>Status:</strong> {result.order_info.status}</p>
            <p><strong>Created At:</strong> {new Date(result.createdAt).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}
