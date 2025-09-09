'use client'
import { Copy } from "lucide-react";
import { useState } from "react";

const CopyAddress = ({ address, bg_hover = 'hover:bg-gray-100' }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    return (
        <button
            onClick={handleCopy}
            className={`w-full flex items-center gap-1 py-2 text-sm px-2 rounded-full` + ' ' + bg_hover}
        >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy Address'}
        </button>
    )
};

export default CopyAddress;