import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Head from 'next/head';  // 引入 Head 组件

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* 添加 Head 组件并设置 favicon */}
      <Head>
         <link rel="icon" href="/static/favicon.ico" />
      </Head>
      {/* Top Section */}
      <h1 className={styles.h1}>0xOffchain Labs - DomeLand Staking Contract</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
         // onClick={() => router.push(`/mint`)}
         onClick={()=>{window.location.href="https://app.domeland.vip/mint"}}
        >
          {/* Mint a new NFT */}
          <img src="/static/icons/drop.png" alt="drop" width="64" height="64" />
          <h2 className={styles.selectBoxTitle}>Mint A DOMELAND NFT</h2>
          <p className={styles.selectBoxDescription}>
             Mint <b>DOMELAND</b> NFTs from domeland Contract.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src="/static/icons/token.png" alt="token" width="64" height="64" />
          <h2 className={styles.selectBoxTitle}>Stake Your DomeLand NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Staking your DOEMLAND NFTs, and earn <b>$DLD</b> tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
