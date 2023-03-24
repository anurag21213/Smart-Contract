require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// require("dotenv").config();

// const GOERLI_URL=process.env.GOERLI_URL;
// const PRIVATE_KEY=process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  networks:{
    goreli:{
      url:"https://eth-goerli.g.alchemy.com/v2/CRtAioz1XDYBQZseLRVQxZ2aWqJ6QvIX",
      accounts:["ba8a1cdea36343d6791291c74e94deb4aa632bb040ec0cab063818f058aa8627"]
    }
  }
};

//0x829Df4Cb017F02c379A590a743c3344DC849b7e2
