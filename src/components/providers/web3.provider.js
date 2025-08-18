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
        appName: 'My Web3 App',
        projectId: '600ff3ccff8155148627a3e3d069aaa1',
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
