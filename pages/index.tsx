import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>0xOffchain Deploy - DomeLand Staking Contract</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
         // onClick={() => router.push(`/mint`)}
         onClick={()=>{window.location.href="https://app.domeland.vip/mint"}}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use the NFT Drop Contract to claim an NFT from the collection.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your DomeLand NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Staking DOEMLAND deployed via <b>0xOffchain Labs Deploy</b>{" "}
            to stake your DOMELAND NFTs, and earn <b>$DLD</b> tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
