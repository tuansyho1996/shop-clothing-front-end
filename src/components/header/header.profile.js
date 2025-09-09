'use client';

import { useAccount, useDisconnect, useBalance, useBlockNumber } from 'wagmi';
import { useState, useEffect, useContext, useRef } from 'react';
import { AppContext } from '@/context/context.app';
import { useRouter } from 'next/navigation';
import { Copy, Key } from 'lucide-react';
import jazzicon from "@metamask/jazzicon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NetworkSwitcher from '../ui/switch.chain';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CopyAddress from '../web3/web3.copy';

const JazzAvatar = ({ address, diameter = 32 }) => {
    const ref = useRef();

    useEffect(() => {
        if (!address || !ref.current) return;
        const seed = parseInt(address.slice(2, 10), 16); // từ địa chỉ ví
        const icon = jazzicon(diameter, seed);
        ref.current.innerHTML = ""; // xóa cũ nếu có
        ref.current.appendChild(icon);
    }, [address, diameter]);

    return <div ref={ref} style={{ width: diameter, height: diameter, borderRadius: "9999px", overflow: "hidden" }} />;
};

function ConnectWrapper() {
    const { isConnected } = useAccount();
    if (isConnected) return null;
    return <ConnectButton />;
}


export default function WalletDropdown() {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { user } = useContext(AppContext);
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { data: balanceData, refetch } = useBalance({
        address,
        watch: true,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);


    if (!isMounted || !isConnected) return (
        <ConnectWrapper />
    )

    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative inline-block text-left !text-sm">
            <div className="flex items-center gap-1">
                <NetworkSwitcher />
                <button
                    className={`flex items-center gap-1 py-1 rounded-full hover:bg-[var(--primary-color)] px-2 py-2 ${dropdownOpen ? 'bg-[var(--primary-color)]' : 'bg-gray-100'}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>{balanceData ? `${balanceData.formatted.length < 6 ? balanceData.formatted : `${balanceData.formatted.slice(0, 6)}...`} ${balanceData.symbol}` : 'Loading...'}</span>
                    <JazzAvatar address={address} diameter={32} />
                    <span className="text-sm font-mono max-[470px]:hidden">{shortAddress}</span>
                    <KeyboardArrowDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow z-10 px-4 py-2">
                    <div
                        className="fixed inset-0 bg-black opacity-0 z-20"
                        onClick={() => setDropdownOpen(false)}
                    ></div>
                    <div className="relative z-30">
                        <CopyAddress address={address} />
                        <button
                            onClick={() => {
                                setDropdownOpen(false);
                                router.push('/profile');
                            }}
                            className="w-full text-left py-2 hover:bg-gray-100 text-sm px-2 rounded-full"
                        >
                            <AccountCircleOutlinedIcon fontSize='small' className="inline mr-2" />
                            Profile
                        </button>
                        <button
                            onClick={() => {
                                disconnect();
                                setDropdownOpen(false);
                            }}
                            className="w-full text-left py-2 text-red-600 hover:bg-red-50 text-sm px-2 rounded-full"
                        >
                            <LogoutIcon fontSize='small' className="inline mr-2" />
                            Disconnect
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}
