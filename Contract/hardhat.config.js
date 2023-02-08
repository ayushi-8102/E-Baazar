require('@nomiclabs/hardhat-ethers')
require("@nomicfoundation/hardhat-toolbox");
const API_URL = "https://polygon-mumbai.g.alchemy.com/v2/XNdaU8eEKFkF_l7Kp-HfbCsQ0h4YOXCk";
const PRIVATE_KEY = "4810c72f9befbdca64628534f50d895e83a5ff8ec9c734ac44c742214c8930d1"
const PUBLIC_KEY = "0xCe29CDe8E7c87581ec44C85fbCefD4c9a4BeAc6a";
module.exports = {
  defaultNetwork: "matic",
  networks: {
  hardhat: {},
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  solidity: "0.8.9",
};



