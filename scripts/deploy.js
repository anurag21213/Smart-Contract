// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
async function getBalance(address){
  const balanceBigInt=await hre.ethers.provider.getBalance(address);

  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consolebalances(addressess){
let counter=0
for(const address of addressess){
    console.log(`Address ${counter} balance`,getBalance(address));
    counter++;
}
}

async function consoleMemos(memos){
for(const memo of memos){
  const timestamp=memo.timestamp;
  const name=memo.name;
  const fromadd=memo.from;
  const message=memo.message;

  console.log(`At${timestamp},${name},${fromadd},${message}`);
}
}

async function main() {
 const [owner,from1,from2,from3]=await hre.ethers.getSigners();
 const chai=await hre.ethers.getContractFactory("Chai");
 const contract =await chai.deploy();
 await contract.deployed();

 console.log("address",contract.address);

 const addressess=[owner.address.from1.address.from2.address.from3.address];

 await consolebalances(addressess);

 const amount ={value:hre.ethers.utils.parseEther("1")};

 await contract.connect(from1).buychai("from1","message",amount);
 await contract.connect(from2).buychai("from2","message",amount);
 await contract.connect(from3).buychai("from3","message",amount);

 await consolebalances(addressess);

 const memoes=await contract.getMemo();
 consoleMemos(memoes);
//  await contract.connect(from4).buychai("from1","message",amount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
