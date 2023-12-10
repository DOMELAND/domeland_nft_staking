// 初始化 web3
let web3;
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  alert('Install MetaMask First!');
}


const contractABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "approved",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "BatchMetadataUpdate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_fromTokenId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_toTokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "GiftSent",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MetadataUpdate",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Minted",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "type": "address",
          "name": "previousOwner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "newOwner",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "MAX_AMOUNT",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MAX_TOKENS",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_mintPrice",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "animation_ext",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "animation_url",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "gift",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "mintTo",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setAnimationExt",
      "inputs": [
        {
          "type": "string",
          "name": "newExt",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setAnimationUrl",
      "inputs": [
        {
          "type": "string",
          "name": "newUrl",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setMintPrice",
      "inputs": [
        {
          "type": "uint256",
          "name": "newMintPrice",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "type": "bytes4",
          "name": "interfaceId",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenByIndex",
      "inputs": [
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "type": "address",
          "name": "newOwner",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
];

const contractAddress = "0x23aEaf478ce044cD6c3D0f15a41760010Aaea63D"; // Replace with your ERC721 NFT contract address


const contractOwner = '0xD5e7C7e1bf099091d6fA2045f9EeB12fbB2eC81b'; // 合约owner

const dynamicNFTContract = new web3.eth.Contract(contractABI, contractAddress);
const infoMessage = document.getElementById('info-message');

async function getCurrentAddress() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}


let isConnected = false;
let mintPrice = 280000000000000000; // 0.28 eth

const arbchainID = 42161;
const hexarbchainID = web3.utils.toHex(arbchainID);

let formattedMintPrice = web3.utils.fromWei(mintPrice.toString(), 'ether');

infoMessage.textContent = 'Please Connect Wallet First ...! ';


async function connectWallet() {
	try {
	  if (isConnected) {
		// 断开钱包连接
		infoMessage.textContent = 'MetaMask Disconnected!';
		document.getElementById('wallet-info').textContent = 'MetaMask Not Connected!';
		document.getElementById('wallet-info').classList.add('not-connected');
		document.getElementById('mint-nft-button').disabled = true;
		document.getElementById('mint-section').classList.add('hidden');
		document.getElementById('withdraw-button').classList.add('hidden');
		document.getElementById('gift-section').classList.add('hidden');
		isConnected = false;
		document.getElementById('connect-wallet-button').textContent = 'Connect Wallet';

	  } else if (window.ethereum) {
		const chainId = await window.ethereum.request({ method: 'eth_chainId' });
		if (chainId !== hexarbchainID) { // Check if current chain is Arbitrum Main Net (chainId: 0xa4b1)
		  const switchNetwork = confirm('Switch Network to Arbitrum One ?');
		  if (switchNetwork) {
			try {
			  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: hexarbchainID }] });			  
			} catch (error) {
			  console.error('Swich Network Error:', error);
			  infoMessage.textContent = 'Swich Network Fail';
			  return;
			}
		  } else {
			return;
		  }
		}
  
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const currentAddress = await getCurrentAddress();
		const balance = await web3.eth.getBalance(currentAddress);
		formattedBalance = web3.utils.fromWei(balance, 'ether');

		document.getElementById('wallet-info').textContent = `ADDR: ${currentAddress} | BALANCE: ${formattedBalance} ETH`;
		document.getElementById('wallet-info').classList.remove('not-connected');
		document.getElementById('mint-nft-button').disabled = false;
		document.getElementById('mint-section').classList.remove('hidden');

		document.getElementById('mint-price').textContent = `Mint Price: ${formattedMintPrice} WETH`;
  
		const isOwner = currentAddress.toLowerCase() === contractOwner.toLowerCase();
		if (isOwner) {
		  document.getElementById('withdraw-button').classList.remove('hidden');
		  document.getElementById('gift-section').classList.remove('hidden');
		}
  
		// 在成功连接 MetaMask 钱包后正确更新提示信息
		infoMessage.textContent = 'MetaMask Connected OK!';
		isConnected = true;
		document.getElementById('connect-wallet-button').textContent = 'Disconnect';
	  } else {
		alert('Install MetaMask Please!');
		infoMessage.textContent = 'Connect Wallet Fail!';
	  }
	} catch (error) {
	  console.error('Connect Wallet Error:', error);
	  infoMessage.textContent = 'Connect Wallet Fail!';
	}
  }


async function mintNFT(mintAmount) {
	const amount = parseInt(mintAmount);
	console.log('Minting NFTs:', amount);
  
	try {
	  let currentAddress = await getCurrentAddress();
	  let totalMintPrice = mintPrice * amount;
  
	  infoMessage.textContent = 'Commit Mint NFT TX...';
	  dynamicNFTContract.methods
		.mint(amount)
		.send({ from: currentAddress, value: totalMintPrice })
		.on('transactionHash', (hash) => {
		  console.log('TX Hash:', hash);
		  infoMessage.textContent = 'TX Sended,Waiting Confirmation...';
		})
		.on('confirmation', (confirmationNumber, receipt) => {
		  console.log('Confirmation Num:', confirmationNumber);
		  console.log('Receipt:', receipt);
		  infoMessage.textContent = 'Mint NFT Sucdessful!';
		})
		.on('error', (error) => {
		  console.error('Mint NFT Error:', error);
		  infoMessage.textContent = 'Mint NFT Fail!';
		});
	} catch (error) {
	  console.error('Mint NFT Error:', error);
	  infoMessage.textContent = 'Mint NFT Fail!';
	}
  }

  

async function withdrawFunds() {
  try {
    let currentAddress = await getCurrentAddress();

    infoMessage.textContent = 'Commit Withdraw TX...';
    dynamicNFTContract.methods
      .withdraw()
      .send({ from: currentAddress })
      .on('transactionHash', (hash) => {
        console.log('TX Hash:', hash);
        infoMessage.textContent = 'TX Sended, Waiting Confirmation...';
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('Confirmation Num:', confirmationNumber);
        console.log('Receipt:', receipt);
        infoMessage.textContent = 'Withdraw Successful!';
      })
      .on('error', (error) => {
        console.error('withdraw Error:', error);
        infoMessage.textContent = 'Withdraw Failed!';
      });
  } catch (error) {
    console.error('withdraw Error:', error);
    infoMessage.textContent = 'Withdraw Failed!';
  }
}


async function giftNfts() {
	try {
	  let currentAddress = await getCurrentAddress();
	  let toAddress = document.getElementById('gift-address').value;
	  let giftAmount = parseInt(document.getElementById('gift-amount').value);
	  
	  infoMessage.textContent = 'Commit Gift NFT TX...';
	  dynamicNFTContract.methods
		.gift(toAddress, giftAmount)
		.send({ from: currentAddress })
		.on('transactionHash', (hash) => {
		  console.log('TX Hash:', hash);
		  infoMessage.textContent = 'TX Sended,Waiting Confirmation...';
		})
		.on('confirmation', (confirmationNumber, receipt) => {
		  console.log('Confirmation Num:', confirmationNumber);
		  console.log('Receipt:', receipt);
		  infoMessage.textContent = 'Gift NFT Successful!';
		})
		.on('error', (error) => {
		  console.error('Gift NFT Error:', error);
		  infoMessage.textContent = 'Gift NFT Failed';
		});
	} catch (error) {
	  console.error('Gift NFT Error:', error);
	  infoMessage.textContent = 'Gift NFT Failed';
	}
  }



document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('connect-wallet-button').addEventListener('click', connectWallet);

	document.getElementById('mint-nft-button').addEventListener('click', () => {
		const mintAmount = document.getElementById('mint-amount').value;
		mintNFT(mintAmount);
	}); 

	// 在 DOMContentLoaded 事件中，将 withdrawFunds 函数绑定到 withdraw-button
	document.getElementById('withdraw-button').addEventListener('click', withdrawFunds);

		// 在 DOMContentLoaded 事件中，将 giftNfts 函数绑定到 withdraw-button
	document.getElementById('gift-nft-button').addEventListener('click', giftNfts);

	document.getElementById('mint-amount').addEventListener('change', () => {
		const mintAmount = document.getElementById('mint-amount').value;
		// document.getElementById('mint-price').textContent = `Mint Price: ${mintPrice} ETH`;
		document.getElementById('mint-price').textContent = `Mint Fees: ${formattedMintPrice} x ${mintAmount} ETH`;
	});
  });

  


 