const { ethers, upgrades } = require("hardhat");

/*
async function main() {
  const Greeter = await ethers.getContractFactory("GreeterV1");
  const greeter = await upgrades.deployProxy(Greeter, [], {
    initializer: "initialize",
  });
  console.log("Deploying...: ", greeter.address);
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
}*/

const PROXY_CONTRACT_ID = "0x5F2152c6457BA2d115a674Ea51bfF48b054cA6eD";
async function main() {
  const Greeter = await ethers.getContractFactory("GreeterV2");
  const greeter = await upgrades.upgradeProxy(PROXY_CONTRACT_ID, Greeter);
  console.log("Deploying...: ", greeter.address);
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });