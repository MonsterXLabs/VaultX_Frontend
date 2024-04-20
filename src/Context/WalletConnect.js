import {createContext, useEffect, useState} from "react"
import {createWeb3Modal} from "@web3modal/wagmi/react"
import {defaultWagmiConfig} from "@web3modal/wagmi/react/config"
import { createConfig, configureChains, mainnet } from 'wagmi'
import {WagmiProvider} from "wagmi"
import {polygon, polygonMumbai} from "wagmi/chains"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import {
  authenticationServices,
  getMedia,
  userServices,
} from "../services/supplier"
import {createCookie} from "../utils/cookie"

// const connector = new MetaMaskConnector()

const queryClient = new QueryClient()

const projectId = "cc7204248baa9711fe943f0e9a4eb47c"

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

const chains =
  process.env.REACT_APP_NODE_ENV !== "DEV" ? [polygon] : [polygonMumbai]
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
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
      if (pathname?.includes("/")) window.location.reload()
    } catch (error) {
      console.log({error})
    }
  }

  const fetchImages = async () => {
    const data = await getMedia()
    localStorage.setItem("media", JSON.stringify(data))
    return data
  }

  useEffect(() => {
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
