// 初始化 web3
let web3;
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  alert('请安装 MetaMask!');
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
	}
];

const contractAddress = "0x7f63b0eF54d862cc53240C832acE03FeF987C22D"; // Replace with your contract address


const contractOwner = '0xAb578dC1BE6f21e0B2A3fb04fe5192bc43B435B8'; // 合约owner

const dynamicNFTContract = new web3.eth.Contract(contractABI, contractAddress);
const infoMessage = document.getElementById('info-message');

async function getCurrentAddress() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}


let isConnected = false;




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
		isConnected = false;
		document.getElementById('connect-wallet-button').textContent = 'Connect Wallet';
	  } else if (window.ethereum) {
		const chainId = await window.ethereum.request({ method: 'eth_chainId' });
	//	if (chainId !== '0xa4b1') { // Check if current chain is Arbitrum Main Net (chainId: 0xa4b1)
		if (chainId !== '0x66eed') { // Check if current chain is Arbitrum Test Net (chainId: 0x66eed)
		  const switchNetwork = confirm('请将 MetaMask 钱包切换到 Arbitrum 网络。是否继续？');
		  if (switchNetwork) {
			try {
	//		  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xa4b1' }] });
			  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x66eed' }] });			  
			} catch (error) {
			  console.error('切换网络时发生错误:', error);
			  infoMessage.textContent = '切换网络失败';
			  return;
			}
		  } else {
			return;
		  }
		}
  
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const currentAddress = await getCurrentAddress();
		const balance = await web3.eth.getBalance(currentAddress);
		const formattedBalance = web3.utils.fromWei(balance, 'ether');
		document.getElementById('wallet-info').textContent = `地址: ${currentAddress} | 余额: ${formattedBalance} ETH`;
		document.getElementById('wallet-info').classList.remove('not-connected');
		document.getElementById('mint-nft-button').disabled = false;
		document.getElementById('mint-section').classList.remove('hidden');
  
		const isOwner = currentAddress.toLowerCase() === contractOwner.toLowerCase();
		if (isOwner) {
		  document.getElementById('withdraw-button').classList.remove('hidden');
		}
  
		// 在成功连接 MetaMask 钱包后正确更新提示信息
		infoMessage.textContent = '已连接 MetaMask 钱包';
		isConnected = true;
		document.getElementById('connect-wallet-button').textContent = 'Disconnect';
	  } else {
		alert('请安装 MetaMask!');
		infoMessage.textContent = '连接钱包失败';
	  }
	} catch (error) {
	  console.error('连接钱包时发生错误:', error);
	  infoMessage.textContent = '连接钱包失败';
	}
  }

  /*
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
      isConnected = false;
      document.getElementById('connect-wallet-button').textContent = 'Connect Wallet';
    } else if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const currentAddress = await getCurrentAddress();
      const balance = await web3.eth.getBalance(currentAddress);
      const formattedBalance = web3.utils.fromWei(balance, 'ether');
      document.getElementById('wallet-info').textContent = `地址: ${currentAddress} | 余额: ${formattedBalance} ETH`;
      document.getElementById('wallet-info').classList.remove('not-connected');
      document.getElementById('mint-nft-button').disabled = false;
      document.getElementById('mint-section').classList.remove('hidden');

      const isOwner = currentAddress.toLowerCase() === contractOwner.toLowerCase();
      if (isOwner) {
        document.getElementById('withdraw-button').classList.remove('hidden');
      }

      // 在成功连接 MetaMask 钱包后正确更新提示信息
      infoMessage.textContent = '已连接 MetaMask 钱包';
      isConnected = true;
      document.getElementById('connect-wallet-button').textContent = 'Disconnect';
    } else {
      alert('请安装 MetaMask!');
      infoMessage.textContent = '连接钱包失败';
    }
  } catch (error) {
    console.error('连接钱包时发生错误:', error);
    infoMessage.textContent = '连接钱包失败';
  }
}
*/


async function mintNFT(mintAmount) {
	const amount = parseInt(mintAmount);
	console.log('Minting NFTs:', amount);
  
	try {
	  const currentAddress = await getCurrentAddress();
	  const mintPrice = await dynamicNFTContract.methods._mintPrice().call();
	  const totalMintPrice = mintPrice * amount;
  
	  infoMessage.textContent = '提交 mint NFT 交易...';
	  dynamicNFTContract.methods
		.mint(amount)
		.send({ from: currentAddress, value: totalMintPrice })
		.on('transactionHash', (hash) => {
		  console.log('交易哈希:', hash);
		  infoMessage.textContent = '交易已发送，等待确认...';
		})
		.on('confirmation', (confirmationNumber, receipt) => {
		  console.log('确认号:', confirmationNumber);
		  console.log('收据:', receipt);
		  infoMessage.textContent = 'Mint NFT 成功!';
		})
		.on('error', (error) => {
		  console.error('购买 NFT 时发生错误:', error);
		  infoMessage.textContent = 'Mint NFT 失败';
		});
	} catch (error) {
	  console.error('购买 NFT 时发生错误:', error);
	  infoMessage.textContent = 'Mint NFT 失败';
	}
  }

  

async function withdrawFunds() {
  try {
    const currentAddress = await getCurrentAddress();

    infoMessage.textContent = '提交提款交易...';
    dynamicNFTContract.methods
      .withdraw()
      .send({ from: currentAddress })
      .on('transactionHash', (hash) => {
        console.log('交易哈希:', hash);
        infoMessage.textContent = '交易已发送，等待确认...';
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('确认号:', confirmationNumber);
        console.log('收据:', receipt);
        infoMessage.textContent = '提款成功!';
      })
      .on('error', (error) => {
        console.error('提款时发生错误:', error);
        infoMessage.textContent = '提款失败';
      });
  } catch (error) {
    console.error('提款时发生错误:', error);
    infoMessage.textContent = '提款失败';
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

	document.getElementById('mint-amount').addEventListener('change', () => {
		const mintAmount = document.getElementById('mint-amount').value;
		document.getElementById('mint-price').textContent = `Mint Price: ${mintPrice} ETH`;
	});
  });


  


 