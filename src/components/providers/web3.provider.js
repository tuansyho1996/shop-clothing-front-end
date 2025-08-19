'use client'

import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum, optimism, base, polygon } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { useMemo } from 'react'
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient()

export default function Web3Provider({ children }) {
    const config = useMemo(() => getDefaultConfig({
        appName: 'shop',
        projectId: '72add62293285bf2c1c82553baf85108',
        chains: [mainnet, arbitrum, optimism, base, polygon],
    }), [])

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
