"use client"

import { PropsWithChildren, useState } from "react";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


export function WalletProvider(props){

    const [queryClient] = useState(() => new QueryClient());
    
    const config = getDefaultConfig({
      appName: 'My Tele Mini App',
      projectId: 'e7c719d03c5311a1f237c8159db5f3bc',
      chains: [mainnet, polygon, optimism, arbitrum, base],
      ssr: true, // If your dApp uses server side rendering (SSR)
    });

    return (
        <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {props.children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    )
}