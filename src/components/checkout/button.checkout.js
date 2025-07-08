"use client";

import { useSendTransaction, useWaitForTransactionReceipt, useAccount } from "wagmi";
import { parseEther } from "viem";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function CryptoPayButton() {
    const [txHash, setTxHash] = useState("");
    const { address, isConnected } = useAccount();
    const { data, sendTransaction } = useSendTransaction();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash: txHash,
    });

    const handlePay = () => {
        if (!isConnected) {
            alert("Please connect your wallet first.");
            return;
        }
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
            {isConnected ?
                <>
                    <button
                        onClick={handlePay}
                        className="cursor-pointer w-full bg-[var(--accent-color)] text-white rounded-xl py-3 px-4 font-semibold opacity-95 hover:opacity-100 transition transition duration-300 transform hover:scale-105"
                    >
                        {isConfirming ? "Processing..." : "Pay with Wallet"}
                    </button>
                    {isSuccess && <p className="text-green-600 mt-2">✅ Payment Successful</p>}
                </>
                :
                <ConnectButton.Custom>
                    {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
                        return (
                            <div
                                {...(!mounted && { "aria-hidden": true })}
                                className="w-full"
                            >
                                {(() => {
                                    if (!mounted || !account || !chain) {
                                        return (
                                            <button
                                                onClick={openConnectModal}
                                                className="w-full bg-[var(--primary-color)] text-white rounded-xl py-3 px-4 font-semibold opacity-95 hover:opacity-100 transition transition duration-300 transform hover:scale-105"
                                            >
                                                Connect Wallet
                                            </button>
                                        );
                                    }

                                    return (
                                        <button
                                            onClick={openAccountModal}
                                            className="w-full bg-gray-200 text-black rounded-xl py-3 px-4 font-semibold hover:bg-gray-300 transition"
                                        >
                                            {account.displayName}
                                        </button>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
            }
        </div>
    );
}
