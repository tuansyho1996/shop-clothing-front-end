'use client'
import { AppContext } from "@/context/context.app"
import { useContext } from "react"

export default function OrdersPage() {
    const { user } = useContext(AppContext)
    console.log('User in orders page:', user?.usr_orders)
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul>
                {user?.usr_orders && user.usr_orders.length > 0 ? (
                    user.usr_orders.map((order, index) => (
                        <li key={index} className="mb-4 p-4 border rounded-lg">
                            <h3 className="text-lg font-bold mb-2">Order #{order._id}</h3>
                            <p className="mb-1">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p className="mb-1">Total: ${order.total}</p>
                            <p className="mb-1">Status: {order.order_status}</p>
                            <div>
                                <h4 className="font-semibold">Items:</h4>
                                <ul className="list-disc list-inside">
                                    {order.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </ul>
        </main>
    )
}