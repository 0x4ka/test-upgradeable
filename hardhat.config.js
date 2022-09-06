require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
process.env.ALCHEMY_API_KEY = "QhtbYZdZqyCszp1JNO7O_l5e62rJOP27";
process.env.RINKEBY_PRIVATE_KEY = "936872fe93f15833fe5e0d50cb5886f317fd4f39a9b836e244f8fe354380097f";
process.env.ETHERSCAN_PRIVATE_KEY = "127P71JA6C4WC2B9R9FR383RE3QHRPH7PP";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // 以下を追加
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_PRIVATE_KEY
    }
  }
};
