require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      url: "https://eth-sepolia.g.alchemy.com/v2/iq1PSzoQ4Q33WC1x4FR_Sf4Z1-bRgYZK",
      accounts: ["b7d7a7bc5b21aaa53d1ed4f6fd1d868473ffc250db4b7a040db59f036ec1f73d"],
    },
  },
};
