import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "arbitrum-goerli";
const myclientID = "e7ec4f3dd55f91ca9a3f313df231ddb4";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      clientID={myclientID}
      activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
