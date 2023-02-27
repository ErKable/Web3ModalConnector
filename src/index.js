import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig, useAccount, useSigner } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];


// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: process.env.REACT_APP_WALLET_CONNECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: process.env.REACT_APP_WALLET_CONNECT_ID,
    version: "2", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <WagmiConfig client={wagmiClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </WagmiConfig>
  <Web3Modal
  projectId= {process.env.REACT_APP_WALLET_CONNECT_ID}
  ethereumClient={ethereumClient}
/></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
