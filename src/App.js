import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Web3Button } from "@web3modal/react";
import { useAccount, useSigner} from "wagmi";

function App() {
  const { address, isConnected } = useAccount()
  console.log(address, isConnected)
  const {data: signer} = useSigner()
  console.log(signer)



  return (
    <>
      
        
        <Web3Button />
      

      
    </>
  );
}

export default App;
