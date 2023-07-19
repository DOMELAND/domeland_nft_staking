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
      chainId: 421613, // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["https://goerli-rollup.arbitrum.io/rpc"],
    
      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "Arbiturm Goerli",
        symbol: "ARBG",
      },
      shortName: "Arbitrum Goerli", // Display value shown in the wallet UI
      slug: "arbgo", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "arbitrum-goerli", // Name of the network
      name: "Arbitrum Goerli Testnet", // Name of the network
    }}
    dAppMeta={{
        name: "DOMEStaker",
        description: "Domeland Staker",
        logoUrl: "https://twitter.com/0xOffchain",
        url: "https://app.domeland.vip",
        isDarkMode: true,
      }}
    storageInterface={storage}
    clientId="e7ec4f3dd55f91ca9a3f313df231ddb4"
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
