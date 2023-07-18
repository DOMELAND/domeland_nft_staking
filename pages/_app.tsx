import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "arbitrum-goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    activeChain={activeChain}
    dAppMeta={{
        name: "DOMEStaker",
        description: "Domeland Staker",
        logoUrl: "https://twitter.com/0xOffchain",
        url: "https://app.domeland.vip",
        isDarkMode: true,
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
