import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import abi from './contracts/Chai.json';
import './App.css';
import Buy from './components/Buy';
import Memo from './components/Memo';

function App() {
  const [state,setSate]=useState({
    provider:null,
    signer:null,
    contracts:null,
  })

  useEffect(()=>{
    const connetWallet=async()=>{
      const contractAdd="0x829Df4Cb017F02c379A590a743c3344DC849b7e2";
      const contractAbi=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts",});

        }
        const provider= new ethers.providers.Web3Provider(ethereum);

        const signer= provider.getSigner();

        const contract= new ethers.Contract(contractAdd,contractAbi,signer);

        setSate({provider,signer,contract});
      }catch(error){
        console.log(error);
      }
    }

    connetWallet();
  },[])

  console.log(state);
  return (
    <div className="App">
      <Buy state={state}/>
      <Memo state={state} />
    </div>
  );
}

export default App;
