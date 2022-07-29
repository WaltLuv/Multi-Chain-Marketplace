const hre = require("hardhat");
const fs = require('fs');

async function main() {

  const MarketResell = await hre.ethers.getContractFactory("MarketResell");
  const marketResell = await MarketResell.deploy();
  await marketResell.deployed();
  console.log("marketResell deployed to:", marketResell.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
