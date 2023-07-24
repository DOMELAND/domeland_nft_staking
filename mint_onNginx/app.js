// 初始化 web3
let web3;
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  alert('Install MetaMask First!');
}

const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "GiftSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Minted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "MAX_AMOUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_TOKENS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_mintPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "animation_ext",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "animation_url",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "gift",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "mintTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newExt",
                "type": "string"
            }
        ],
        "name": "setAnimationExt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newUrl",
                "type": "string"
            }
        ],
        "name": "setAnimationUrl",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newMintPrice",
                "type": "uint256"
            }
        ],
        "name": "setMintPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = "0x921721a490290ea2B9970F6765D3881d2cCFfD46"; // Replace with your ERC721 NFT contract address


const contractOwner = '0xAb578dC1BE6f21e0B2A3fb04fe5192bc43B435B8'; // 合约owner

const dynamicNFTContract = new web3.eth.Contract(contractABI, contractAddress);
const infoMessage = document.getElementById('info-message');

async function getCurrentAddress() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}


let isConnected = false;
let mintPrice = 1000000000000000; // 0.001 eth
let formattedMintPrice = web3.utils.fromWei(mintPrice.toString(), 'ether');

infoMessage.textContent = 'Please Connect Wallet First !!! ';


async function connectWallet() {
	try {
	  if (isConnected) {
		// 断开钱包连接
		infoMessage.textContent = '已断开 MetaMask 钱包';
		document.getElementById('wallet-info').textContent = '钱包未连接';
		document.getElementById('wallet-info').classList.add('not-connected');
		document.getElementById('mint-nft-button').disabled = true;
		document.getElementById('mint-section').classList.add('hidden');
		document.getElementById('withdraw-button').classList.add('hidden');
		document.getElementById('gift-section').classList.add('hidden');
		isConnected = false;
		document.getElementById('connect-wallet-button').textContent = 'Connect Wallet';

	  } else if (window.ethereum) {
		const chainId = await window.ethereum.request({ method: 'eth_chainId' });
	//	if (chainId !== '0xa4b1') { // Check if current chain is Arbitrum Main Net (chainId: 0xa4b1)
		if (chainId !== '0x66eed') { // Check if current chain is Arbitrum Test Net (chainId: 0x66eed)
		  const switchNetwork = confirm('Switch Network to Arbitrum , Confirm Pls？');
		  if (switchNetwork) {
			try {
	//		  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xa4b1' }] });
			  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x66eed' }] });			  
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

		document.getElementById('mint-price').textContent = `Mint Price: ${formattedMintPrice} ETH`;
  
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
	  console.log('Minting totalMintPrice:', totalMintPrice);
  
	  infoMessage.textContent = 'Commit Mint NFT TX...';
	  dynamicNFTContract.methods
		.mint(amount)
		.send({ from: currentAddress, value: totalMintPrice })
		.on('transactionHash', (hash) => {
		  console.log('TX Hash:', hash);
		  infoMessage.textContent = 'TX Sended，Waiting Confirmation...';
		})
		.on('confirmation', (confirmationNumber, receipt) => {
		  console.log('确认号:', confirmationNumber);
		  console.log('收据:', receipt);
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
        infoMessage.textContent = 'TX Sended，Waiting Confirmation...';
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
		  infoMessage.textContent = 'TX Sended，Waiting Confirmation...';
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

  


 