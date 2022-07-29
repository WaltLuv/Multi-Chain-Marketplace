require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://polygon-mumbai.infura.io/v3/7ff286356a2c41b594848bf24ebee06d",
      accounts: ["593a3a6eb8be9717c7d88e23190a9db446f5520d89ab2f41d7e00db8ca8e1760"]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://polygon-mainnet.infura.io/v3/7ff286356a2c41b594848bf24ebee06d",
      accounts: ["593a3a6eb8be9717c7d88e23190a9db446f5520d89ab2f41d7e00db8ca8e1760"]
    }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
