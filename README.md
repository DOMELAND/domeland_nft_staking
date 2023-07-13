# NFT Staking App

## Introduction

This tools to create an DOMELAND NFT Staking application. In this DAPP, users can stake their ERC721 NFTs and earn ERC20 tokens as a reward. It combines:

- [NFT Drop contract](https://thirdweb.com/thirdweb.eth/DropERC721): To create a collection of NFTs that users can stake.
- [Token contract](https://thirdweb.com/thirdweb.eth/TokenERC20): To create a token that users can earn as a reward for staking.
- [NFT Staking contract](https://thirdweb.com/thirdweb.eth/NFTStake): To create a contract that users can stake their NFTs in, and earn tokens as a reward.

## Using This Template

Create a project using this example:

```bash
npx thirdweb create --template nft-staking-app
```

- Create an [NFT Drop](https://thirdweb.com/thirdweb.eth/DropERC721) contract using the dashboard.
- Create a [Token](https://thirdweb.com/thirdweb.eth/TokenERC20) contract using the dashboard.
- Create an [NFT Staking](https://thirdweb.com/thirdweb.eth/NFTStake) contract using the dashboard.
- Approve the NFT Staking contract to transfer your tokens.
- Deposit the tokens into the NFT Staking contract.
- Update the information in the [contractAddresses.ts](./consts/contractAddresses.ts) file to

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).



## GIT 

…or create a new repository on the command line
echo "# domeland_nft_staking" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DOMELAND/domeland_nft_staking.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/DOMELAND/domeland_nft_staking.git
git branch -M main
git push -u origin main



…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.