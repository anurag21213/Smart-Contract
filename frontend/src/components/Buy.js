// import { ethers } from 'hardhat';
import {ethers} from 'ethers';
import React from 'react'

const Buy = ({state}) => {
    const buychai=async (e)=>{
        e.preventDefault();
        const {contract}=state;

        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;

        console.log(name,message,contract);

        const amount={value:ethers.utils.parseEther("0.001")};

        const transaction=await contract.buychai(name,message,amount);

        await transaction.wait();

        console.log("Transaction is done");

    }
  return (
    <div>
      <form onSubmit={buychai}>
      <label>name</label>
      <input type="text" id="name" placeholder='enter name'></input>
      <input type="text" id="message" placeholder='enter message'></input>
      <button type='submit'>pay</button>
      </form>
    </div>
  )
}

export default Buy
