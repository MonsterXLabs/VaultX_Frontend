import {createPublicClient, createWalletClient, custom, http} from "viem"
import {bscTestnet, polygon, polygonMumbai} from "viem/chains"
import {createConfig} from "wagmi"
import { chain } from "./config"

export const chains = {
  137: polygon,
}

export const createPublicClientLocal = () => {
  return createPublicClient({
    chain: chains[chain],
    transport: http(),
  })
}

export const createWalletClientLocal = () => {
  return createWalletClient({
    chain: chains[chain],
    transport: custom(window.ethereum),
  })
}

export const config = createConfig({
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http(),
    [bscTestnet.id]: http(),
  },
})
