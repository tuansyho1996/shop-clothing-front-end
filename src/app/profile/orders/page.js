'use client'
import { AppContext } from "@/context/context.app"
import Image from "next/image"
import { useContext } from "react"

export default function OrdersPage() {
    const { user } = useContext(AppContext)
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul >
                {user?.usr_orders && user.usr_orders.length > 0 ? (
                    user.usr_orders.map((order, index) => (
                        <li key={index} className="mb-4 p-4 border rounded-lg flex gap-4">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Order #{order._id}</h3>
                                <p className="mb-1">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                <p className="mb-1">Total: {order.order_info?.subtotalEth} ETH</p>
                                <p className="mb-1">Shipping: {order?.order_info?.shippingFee} ETH</p>
                                <p className="mb-1">Status: {order.order_status}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Items:</h4>
                                <ul className="">
                                    {order?.order_info?.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Image src={item.product_images[0]} alt={item?.product_name} width={150} height={150}

                                                className="inline-block mr-2" />
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