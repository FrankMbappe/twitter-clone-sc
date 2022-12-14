import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Twitter = await ethers.getContractFactory("Twitter");
  const token = await Twitter.deploy();

  console.log("Token address:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
