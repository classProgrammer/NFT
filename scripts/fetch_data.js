require('dotenv').config();
const API_URL = process.env.API_URL;
const contractAddress = process.env.ROPSTEN_CONTRACT_ADDRESS;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json"); 
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

function fetchData(tokenId) {
    console.log('data', nftContract.methods.tokenURI(tokenId).encodeABI())    
}

  fetchData(3);