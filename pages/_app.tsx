import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import {
  ThirdwebStorage,
  StorageDownloader,
  IpfsUploader,
} from "@thirdweb-dev/storage";

// Configure a custom ThirdwebStorage instance
const gatewayUrls = {
  "ipfs://": [
    "https://cloudflare-ipfs.com/ipfs/",
    "https://ipfs.io/ipfs/",
    "https://gateway.ipfscdn.io/ipfs/",
  ],
};

const storage = new ThirdwebStorage({ gatewayUrls });

// This is the chain your dApp will work on.
// const activeChain = "arbitrum-goerli";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    activeChain={{
      // === Required information for connecting to the network === \\
      chainId: 42161, // Chain ID of the network
      networkId: 42161,
      chain: "ETH", // Name of the network
      // Array of RPC URLs to use
      rpc: ["https://arb1.arbitrum.io/rpc"],
    
      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      name: "Arbitrum One", // Name of the network
      shortName: "arb1", // Display value shown in the wallet UI
      slug: "arbitrum", // Display value shown in the wallet UI
      testnet: false, // Boolean indicating whether the chain is a testnet or mainnet

    }}
    dAppMeta={{
        name: "Staker",
        description: "Domeland Staker",
        logoUrl: "https://twitter.com/0xOffchainlabs",
        url: "https://app.domeland.vip",
        isDarkMode: true,
      }}
    storageInterface={storage}
    clientId="e7e894443fc2b0540f72eea355c5423f"
    authConfig={{
      authUrl: "/",
      domain: "https://app.domeland.vip",
    }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
