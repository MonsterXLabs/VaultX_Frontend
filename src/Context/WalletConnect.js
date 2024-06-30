import {createContext, useEffect, useState} from "react"
import {createWeb3Modal} from "@web3modal/wagmi/react"
import {defaultWagmiConfig} from "@web3modal/wagmi/react/config"
import { authConnector } from '@web3modal/wagmi'
import { createConfig, configureChains, mainnet,http } from 'wagmi'
import {WagmiProvider} from "wagmi"
import {polygon, polygonMumbai,polygonAmoy} from "wagmi/chains"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

import { metaMask, coinbaseWallet } from 'wagmi/connectors'

import {
  authenticationServices,
  getMedia,
  userServices,
} from "../services/supplier"
import {createCookie, getCookie} from "../utils/cookie"

// const connector = new MetaMaskConnector()

const queryClient = new QueryClient()

// const projectId = "cc7204248baa9711fe943f0e9a4eb47c"
const projectId = "174b15a87b32b8cc2e8ee6ce8d0afb03"


const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

const chains = [polygon, polygonAmoy]

  export const config = createConfig({
    chains: chains,
    connectors: [
      // metaMask(),
      // coinbaseWallet(),
      // authConnector({
      //   chains,
      //   options: { projectId },
      //   email: false, // default to true
      //   socials: ['google', 'apple', 'facebook', 'x'],
      //   showWallets: true, // default to true
      //   walletFeatures: true // default to true
      // })
    ],
    transports: {
      [polygon.id]: http(),
      [polygonAmoy.id]: http(),
    },
  })

// export const config = defaultWagmiConfig({
//   chains, // required
//   projectId, // required
//   metadata, // required
//   // auth: {
//   //   email: false, // default to true
//   //   socials: ['google', 'apple', 'facebook', 'x'],
//   //   // showWallets: true, // default to true
//   //   // walletFeatures: true // default to true
//   // }
// })

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  // featuredWalletIds:['c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  allWallets: 'SHOW',
  metadata,
  name: 'sign'
})

export const WalletContext = createContext(null)

export function WalletContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [sidebar, setSidebar] = useState(false)

  const login = async address => {
    try {
      const authenticate_user_token =
        await authenticationServices.connectWallet({
          wallet: address,
        })
      createCookie("user", JSON.stringify(authenticate_user_token.data.user))
      createCookie("token", authenticate_user_token.data.token)
      createCookie('isLoggedIn',true)
      setIsLoggedIn(true)
    } catch (error) {
      console.log({error})
    }
  }

  const getUser = async () => {
    try {
      const {
        data: {user},
      } = await userServices.getSingleUser()
      setUser(user)
    } catch (error) {
      console.log({error})
    }
  }

  const logout = pathname => {
    try {
      setIsLoggedIn(false)
      setUser(null)
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      localStorage.removeItem("isLoggedIn")
      if (pathname?.includes("/")) window.location.reload()
    } catch (error) {
      console.log({error})
    }
  }

  const fetchImages = async () => {
    const data = await getMedia()
    console.log("media",data)
    localStorage.setItem("media", JSON.stringify(data))
    return data
  }

  useEffect(() => {
    if(getCookie('isLoggedIn')){

      setIsLoggedIn(getCookie('isLoggedIn'))
    }
    fetchImages()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
        getUser,
        user,
        sidebar,
        setSidebar,
        fetchImages,
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </WalletContext.Provider>
  )
}
