"use client";

import { useSendTransaction, useWaitForTransactionReceipt, useAccount } from "wagmi";
import { parseEther } from "viem";
import { useState, useContext } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppContext } from "@/context/context.app";
import { FormCheckoutContext } from "@/context/context.form.checkout";

const CryptoPayButton = () => {
    const { subtotal, shipping } = useContext(AppContext);
    const { firstName, lastName, address: addressForm, apartmentSuite, city, state, zip, country, phone, email, setFormErrors } = useContext(FormCheckoutContext);
    const [txHash, setTxHash] = useState("");
    const { address, isConnected } = useAccount();
    const { data, sendTransaction } = useSendTransaction();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash: txHash,
    });
    const validateForm = () => {
        const errors = {};
        // if (!email) errors.email = "Email is required.";
        if (
            !email ||
            typeof email !== 'string' ||
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (!firstName) errors.firstName = "First name is required.";
        if (!lastName) errors.lastName = "Last name is required.";
        if (!country) errors.country = "Country is required.";
        if (!address) errors.address = "Address is required.";
        if (!apartmentSuite) errors.apartmentSuite = "Apartment suite is required.";
        if (!city) errors.city = "City is required.";
        if (!state) errors.state = "State is required.";
        if (!zip) errors.zip = "ZIP code is required.";
        if (!/^\+?\d{7,15}$/.test(phone.replace(/-/g, ""))) errors.phone = "Please enter a valid phone number";
        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };
    const handlePay = () => {

        if (!validateForm()) {
            return;
        }
        if (!isConnected) {
            alert("Please connect your wallet first.");
            return;
        }
        sendTransaction(
            {
                to: "0xb505AccC95bc45Fc55659DD51FC6Bf0eF00Af1bb", // ví nhận tiền
                value: parseEther((subtotal + shipping)?.toString()), // giá tiền, ví dụ 0.03 ETH
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

            <ConnectButton.Custom>
                {({ account, chain, openConnectModal, mounted }) => {
                    const ready = mounted && account && chain;
                    const connected = ready && isConnected;

                    return (
                        <button
                            onClick={!connected ? openConnectModal : handlePay}
                            className={`w-full px-4 py-4 bg-[var(--accent-color)] text-white rounded-lg font-semibold hover:scale-[1.1] transition-colors`}
                        >
                            {!connected ? "Connect Wallet" : isConfirming ? "Confirming..." : isSuccess ? "Payment Successful" : "Pay with Crypto"}
                        </button>
                    );
                }}
            </ConnectButton.Custom>

        </div>
    );

}
export default CryptoPayButton;
