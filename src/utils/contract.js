import { contractAddress } from "./config"
export const abi = [
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
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          }
      ],
      "name": "AssetListed",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          }
      ],
      "name": "AssetPurchased",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "uri",
              "type": "string"
          }
      ],
      "name": "AssetTokenized",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "bidder",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidAmount",
              "type": "uint256"
          }
      ],
      "name": "BidAccepted",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "bidder",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidAmount",
              "type": "uint256"
          }
      ],
      "name": "BidPlaced",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "bidder",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "bidAmount",
              "type": "uint256"
          }
      ],
      "name": "BidRejected",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "CancellationRequested",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "DisputeReported",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "status",
              "type": "uint256"
          }
      ],
      "name": "DisputeResolved",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "EscrowAdded",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "EscrowReleased",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          }
      ],
      "name": "MarketplaceFee",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "NftBurned",
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeAmount",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "wallet",
              "type": "address"
          }
      ],
      "name": "PaymentSplitReceived",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "wallet",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "royaltyAmount",
              "type": "uint256"
          }
      ],
      "name": "RoyaltiesReceived",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "SaleCancelled",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "SaleEnded",
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
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_bidId",
              "type": "uint256"
          }
      ],
      "name": "acceptBid",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "bidCounter",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "_value",
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
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "burnNft",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_bid",
              "type": "uint256"
          }
      ],
      "name": "cancelBid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "cancelOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "endSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "escrowReleaseTime",
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
      "name": "fee",
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
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "getAllBids",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
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
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "getBidDetail",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "bidder",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "bidAmount",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.BidDetails",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getLatestMaticPrice",
      "outputs": [
          {
              "internalType": "int256",
              "name": "",
              "type": "int256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "usdPrice",
              "type": "uint256"
          }
      ],
      "name": "getMaticAmount",
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
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "getSaleDetail",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "seller",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "buyer",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "price",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "status",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "shipmentTime",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "description",
                      "type": "string"
                  }
              ],
              "internalType": "struct Monsterx.SaleDetails",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "getURI",
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
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "idToBid",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "bidder",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "bidAmount",
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
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "idToPaymentSplit",
      "outputs": [
          {
              "internalType": "address",
              "name": "paymentWallet",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "paymentPercentage",
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
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "idToRoyalty",
      "outputs": [
          {
              "internalType": "address",
              "name": "royaltyWallet",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "royaltyPercentage",
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
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "idToSale",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "status",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "shipmentTime",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "description",
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
              "name": "",
              "type": "address"
          }
      ],
      "name": "isAdmin",
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
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "isCurator",
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
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "royaltyWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "royaltyPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.RoyaltyDetails",
              "name": "royalty",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "paymentWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "paymentPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.PaymentSplit[]",
              "name": "_paymentSplit",
              "type": "tuple[]"
          }
      ],
      "name": "listAsset",
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
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "onERC721Received",
      "outputs": [
          {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
          }
      ],
      "stateMutability": "nonpayable",
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
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "placeBid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "royaltyWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "royaltyPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.RoyaltyDetails",
              "name": "royalty",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "paymentWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "paymentPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.PaymentSplit[]",
              "name": "_paymentSplit",
              "type": "tuple[]"
          }
      ],
      "name": "placeBidUnminted",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "purchaseAsset",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "seller",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "royaltyWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "royaltyPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.RoyaltyDetails",
              "name": "royalty",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "paymentWallet",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "paymentPercentage",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct Monsterx.PaymentSplit[]",
              "name": "_paymentSplit",
              "type": "tuple[]"
          }
      ],
      "name": "purchaseAssetUnmited",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          }
      ],
      "name": "reSaleAsset",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "releaseEscrow",
      "outputs": [],
      "stateMutability": "nonpayable",
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
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "reportDispute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "requestCancellation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "_releaseEscrow",
              "type": "bool"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          }
      ],
      "name": "resolveDispute",
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
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "sellerEscrowAmount",
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
              "internalType": "address[]",
              "name": "admins",
              "type": "address[]"
          },
          {
              "internalType": "bool",
              "name": "_isAdmin",
              "type": "bool"
          }
      ],
      "name": "setAdmin",
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
              "internalType": "address[]",
              "name": "curators",
              "type": "address[]"
          },
          {
              "internalType": "bool",
              "name": "_isCurator",
              "type": "bool"
          }
      ],
      "name": "setCurators",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_time",
              "type": "uint256"
          }
      ],
      "name": "setEscrowReleaseTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
          }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_treasury",
              "type": "address"
          }
      ],
      "name": "setTreasury",
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
      "inputs": [],
      "name": "tokenCounter",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "_value",
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
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "tokenOffers",
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
      "inputs": [
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          }
      ],
      "name": "tokenizeAsset",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
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
      "name": "treasury",
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
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          }
      ],
      "name": "updatePrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          }
      ],
      "name": "updateUri",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "uri",
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
              "name": "wallet",
              "type": "address"
          }
      ],
      "name": "withdrawFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "withdrawNft",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "wallet",
              "type": "address"
          }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "stateMutability": "payable",
      "type": "receive"
  }
];

export const address = "0xE422977df5EE5a59072057F6bC10c694DeBd234C"
