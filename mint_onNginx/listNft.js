// app.js 中提到的初始化代码
let web3;
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  alert('请安装 MetaMask!');
}

// listNft.js
const contractABI =[
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

const contractAddress = "0x23aEaf478ce044cD6c3D0f15a41760010Aaea63D"; // Replace with your NFT Contract address

const contractStakeABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "address",
          "name": "_nativeTokenWrapper",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ContractURIUpdated",
      "inputs": [
        {
          "type": "string",
          "name": "prevURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "newURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "type": "uint8",
          "name": "version",
          "indexed": false,
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensDepositedByAdmin",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensWithdrawnByAdmin",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardsClaimed",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "rewardAmount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "previousAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "newAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensStaked",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "tokenIds",
          "indexed": true,
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensWithdrawn",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "tokenIds",
          "indexed": true,
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedRewardsPerUnitTime",
      "inputs": [
        {
          "type": "uint256",
          "name": "oldRewardsPerUnitTime",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newRewardsPerUnitTime",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedTimeUnit",
      "inputs": [
        {
          "type": "uint256",
          "name": "oldTimeUnit",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newTimeUnit",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "claimRewards",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "contractType",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "contractURI",
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
      "name": "contractVersion",
      "inputs": [],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "depositRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getRewardTokenBalance",
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
      "name": "getRewardsPerUnitTime",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "_rewardsPerUnitTime",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMember",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "member",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getStakeInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_staker",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256[]",
          "name": "_tokensStaked",
          "internalType": "uint256[]"
        },
        {
          "type": "uint256",
          "name": "_rewards",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTimeUnit",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "_timeUnit",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
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
      "name": "hasRoleWithSwitch",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
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
      "name": "indexedTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
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
      "name": "initialize",
      "inputs": [
        {
          "type": "address",
          "name": "_defaultAdmin",
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "_contractURI",
          "internalType": "string"
        },
        {
          "type": "address[]",
          "name": "_trustedForwarders",
          "internalType": "address[]"
        },
        {
          "type": "address",
          "name": "_rewardToken",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_stakingToken",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_timeUnit",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_rewardsPerUnitTime",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isIndexed",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
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
      "name": "isTrustedForwarder",
      "inputs": [
        {
          "type": "address",
          "name": "forwarder",
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
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC721Received",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "bytes4",
          "name": "",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rewardToken",
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
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRewardsPerUnitTime",
      "inputs": [
        {
          "type": "uint256",
          "name": "_rewardsPerUnitTime",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setTimeUnit",
      "inputs": [
        {
          "type": "uint256",
          "name": "_timeUnit",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "stake",
      "inputs": [
        {
          "type": "uint256[]",
          "name": "_tokenIds",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "stakerAddress",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
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
      "name": "stakers",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint64",
          "name": "amountStaked",
          "internalType": "uint64"
        },
        {
          "type": "uint64",
          "name": "conditionIdOflastUpdate",
          "internalType": "uint64"
        },
        {
          "type": "uint128",
          "name": "timeOfLastUpdate",
          "internalType": "uint128"
        },
        {
          "type": "uint256",
          "name": "unclaimedRewards",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakersArray",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
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
      "name": "stakingToken",
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
      "name": "withdraw",
      "inputs": [
        {
          "type": "uint256[]",
          "name": "_tokenIds",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    }
];

const contractStakeAddress =  "0xE50a55B7b1A3b71FeeC9cd8252075EE205a95953"; // Replace with your Staking contract address

const stakingContract = new web3.eth.Contract(contractStakeABI, contractStakeAddress);

const nftContract = new web3.eth.Contract(contractABI, contractAddress);

async function getCurrentAddress() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

async function connectWallet() {
  // 按照你的要求，我删除了 app.js 中的 connectWallet 函数，这里只保留了连接钱包的部分
  try {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const currentAddress = await getCurrentAddress();
      const balance = await web3.eth.getBalance(currentAddress);
      const formattedBalance = web3.utils.fromWei(balance, 'ether');
      document.getElementById('wallet-info').textContent = `地址: ${currentAddress} | 余额: ${formattedBalance} ETH`;
      document.getElementById('wallet-info').classList.remove('not-connected');
    } else {
      alert('请安装 MetaMask!');
    }
  } catch (error) {
    console.error('连接钱包时发生错误:', error);
  }
}


async function listNFTs() {
  const currentAddress = await getCurrentAddress();

  try {
    const balance = await nftContract.methods.balanceOf(currentAddress).call();
    const nftContainer = document.getElementById('nft-container');

    for (let i = 0; i < balance; i++) {
      const tokenId = await nftContract.methods.tokenOfOwnerByIndex(currentAddress, i).call();
      const tokenURI = await nftContract.methods.tokenURI(tokenId).call();
      const metadata = await (await fetch(tokenURI)).json();

      const nftItem = document.createElement('div');
      nftItem.className = 'nft-item';
      nftItem.innerHTML = `
        <img src="${metadata.image}" alt="${metadata.name}">
        <button class="stake-button">Stake</button>
      `;

      nftContainer.appendChild(nftItem);
    }
  } catch (error) {
    console.error('获取 NFT 时发生错误:', error);
  }
}




document.getElementById('connect-wallet-button').addEventListener('click', async () => {
  await connectWallet();
  await listNFTs();
});