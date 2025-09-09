'use client'
// components/ProfileHeader.tsx
import JazzAvatar from "@/components/avatar"
import { AppContext } from "@/context/context.app"
import { useContext } from "react"
import { useBalance } from "wagmi"
import CopyAddress from "@/components/web3/web3.copy"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Profile({ children }) {
    const { user } = useContext(AppContext);
    const { data: balanceData } = useBalance({
        address: user?.user?.usr_address,
        watch: true,
    });
    const pathname = usePathname();
    return (
        <div>
            <div className=" w-full h-52 bg-gradient-to-r from-red-900 via-purple-700 to-red-900 overflow-hidden flex items-end">
                {/* Avatar + Address */}
                <div className="flex items-center gap-4 px-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto mb-4z">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                        <JazzAvatar address={user?.user?.usr_address} diameter={64} />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-white text-lg font-mono">
                            {user?.user?.usr_address ? (
                                <span>{`${user?.user?.usr_address.slice(0, 6)}...${user?.user?.usr_address.slice(-4)}`}</span>
                            ) : (
                                <span>Not Connected</span>
                            )}
                            <CopyAddress address={user?.user?.usr_address} bg_hover="hover:bg-gray-700" />
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-200 font-mono">
                                {user?.user?.usr_info?.firstName ? user?.user?.usr_info?.firstName : 'Unnamed User'}
                                {user?.user?.usr_info?.lastName ? ` ${user?.user?.usr_info?.lastName}` : ''}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-200">
                                {
                                    balanceData ? `${balanceData.formatted.slice(0, 8)} ${balanceData.symbol}` : '0.00 ETH'
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigate max-w-7xl mx-auto">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <nav className="flex space-x-4 py-4 text-gray-400 font-bold" aria-label="Breadcrumb">
                        <Link href="/profile/info" className="hover:text-accent-color" style={pathname === '/profile/info' ? { color: 'var(--accent-color)' } : {}}>
                            Info
                        </Link>
                        <span>/</span>
                        <Link href="/profile/orders" className="hover:text-accent-color"
                            style={pathname === '/profile/orders' ? { color: 'var(--accent-color)' } : {}}>
                            Orders
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="min-h-[50vh]">
                {children}
            </div>
        </div>
    )
}
