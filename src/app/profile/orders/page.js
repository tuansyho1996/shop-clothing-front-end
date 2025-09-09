'use client'
import { AppContext } from "@/context/context.app"
import { useContext } from "react"

export default function OrdersPage() {
    const { user } = useContext(AppContext)
    console.log('User in orders page:', user?.usr_orders)
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-4">Orders Page</h1>
            <p>This is the orders page under the profile section.</p>
        </main>
    )
}