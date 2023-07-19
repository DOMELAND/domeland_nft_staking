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
    clientId="e7ec4f3dd55f91ca9a3f313df231ddb4"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
