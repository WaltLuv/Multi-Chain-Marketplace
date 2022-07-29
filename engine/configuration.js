/* 
Update values accordingly
xxnft is the NFT Creator Contract Address
xxmarket is the NFT MarketPlace Contract Address to sell created nfts.
xxresell is the NFT MarketResell Contract Address for existing nfts.
xxnftcol is the existing NFT Collection Address
owner wallet = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
buyer 1 wallet = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
buyer 2 wallet = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
buyer 3 wallet = 0x90F79bf6EB2c4f870365E785982E1f101E93b906
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "5bc92848dc8ec38cf4e6452c96751fbaba88454c6ad1b59bb199aa30b8b56b22";
const hhraw = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
IPFS API DETAILS
*/
import { create as ipfsHttpClient } from 'ipfs-http-client';
export const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

/*
HardHat Testnet
*/
export var hhresell = "0x71C95911E9a5D330f4D621842EC243EE1343292e";
export var hhnftcol = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export var hhnft = "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0";
export var hhmarket = "0xbCF26943C0197d2eE0E5D05c716Be60cc2761508";
export var hhrpc = "http://localhost:8545";

/*
Goerli Testnet
*/
export var goeresell = "0x1E201e8E521C93ca3EfC135cc9766f6a18ECC71A";
export var goenftcol = "0x12430b2E0994CC3Da9EfEBDD428c3f727B2Be17C";
export var goenft = "0x3eE541b05539717523f87806c3b3fF11271468b5";
export var goemarket = "0x3B39f4332d585C8aAe4fd836De3AC73656136633";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctresell =  "0x9C8b02B0F35bdf4eb63835cefbFE7388351B5Fc5";
export var bsctnftcol = "0x048a90e86928cDDC50d6C5ab3AE473CEdf87F1aa";
export var bsctnft = "0x0c22eBc586aB9a9f30Ff291Ac6f3772cb3B4D864";
export var bsctmarket = "0x25BA9835B19B67C47cfdeB9cAed8408964CeE776";
export var bsctrpc = "https://data-seed-prebsc-2-s3.binance.org:8545";
;

/*
Mumbai Testnet
*/
export var mmresell = "0xDB58a0DcF1263D240c835A886B3c0a0E6879ECEF";
export var mmnftcol = "0x5DB84FBdd855aA321F089D3866676846E23B564b";
export var mmnft = "0x5D78296fAE0FA248b575a9c5211E5540ed678957";
export var mmmarket = "0x2eee0e12aa94008185D6f338b5Dd9eafEb9e44ef";
export var mmrpc = "https://matic-testnet-archive-rpc.bwarelabs.com";