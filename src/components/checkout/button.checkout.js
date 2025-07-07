"use client";

import { useSendTransaction, useWaitForTransactionReceipt, useAccount } from "wagmi";
import { parseEther } from "viem";
import { useState } from "react";

export default function CryptoPayButton() {
    const [txHash, setTxHash] = useState("");
    const { address, isConnected } = useAccount();
    const { data, sendTransaction } = useSendTransaction();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash: txHash,
    });

    const handlePay = () => {
        sendTransaction(
            {
                to: "0xb505AccC95bc45Fc55659DD51FC6Bf0eF00Af1bb", // ví nhận tiền
                value: parseEther("0.03"), // giá tiền, ví dụ 0.03 ETH
            },
            {
                onSuccess(data) {
                    setTxHash(data.hash);
                },
            }
        );
    };



    return (
        <div className="w-full">
            <button
                onClick={handlePay}
                disabled={!isConnected || isConfirming}
                className="w-full bg-[var(--accent-color)] text-white rounded-xl py-3 px-4 font-semibold opacity-95 hover:opacity-100 transition duration-300 hover:py-4"
            >
                {isConfirming ? "Processing..." : "Pay with Wallet"}
            </button>
            {isSuccess && <p className="text-green-600 mt-2">✅ Payment Successful</p>}
        </div>
    );
}
