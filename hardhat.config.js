require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();
require("@matterlabs/hardhat-zksync-upgradable");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
module.exports = {
  zksolc: {
    version: "latest",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkTestnet",
  networks: {
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: GOERLI_RPC_URL,
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};
