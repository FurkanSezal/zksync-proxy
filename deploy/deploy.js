const { utils, Wallet } = require("zksync-web3");
const ethers = require("ethers");
const { Deployer } = require("@matterlabs/hardhat-zksync-deploy");

module.exports = async function (hre) {
  console.log(`Running deploy script for the Greeter contract`);
  const PRIVATE_KEY = process.env.PRIVATE_KEY;

  const wallet = new Wallet(PRIVATE_KEY);

  const deployer = new Deployer(hre, wallet);
  const BoxContract = await deployer.loadArtifact("Box");

  const box = await hre.zkUpgrades.deployProxy(
    deployer.zkWallet,
    BoxContract,
    [],
    {
      initializer: "initialize",
    }
  );

  await box.deployed();
  console.log("Contract deployed to:", box.address);
};
