const hre = require("hardhat");

async function main() {
    
    const chai=await hre.ethers.getContractFactory("Chai");
    const contract =await chai.deploy();
    await contract.deployed();
   
    console.log("address",contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });