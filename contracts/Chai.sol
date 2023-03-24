// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

contract Chai{
    struct chai{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    chai[] memos;
    address payable owner;

    constructor(){
        owner=payable(msg.sender);
    }

    function buychai(string memory name,string memory message) public payable{
        require(msg.value>0);
        owner.transfer(msg.value);
       memos.push(chai(name,message,block.timestamp,msg.sender));
    }

    function getMemo() public view returns(chai[] memory){
        return memos;
    }
    
}