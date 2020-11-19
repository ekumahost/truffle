// to bring in hdWallet Provider like binance smart chain
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()


// Binance smart chain testnet
// add your binance wallet to metamask: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain
const provider = new HDWalletProvider({
  privateKeys: [process.env.privatekay],  // can generate from https://vanity-eth.tk/ 

  //privateKeys: [''],  // can generate from https://vanity-eth.tk/ 

  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/', // binance RPC : https://docs.binance.org/smart-chain/developer/rpc.html
})

// consfigure for the main net using : https://bsc-dataseed.binance.org/ as providerOrUrl
//const smartChainProvider = null;


module.exports = {
  networks: {

   /* development: {  // to enable deploy to local gnash network
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }, */

    binanceTestNet: {
        provider: () => provider,
     //  port: 8777,             // Custom port
       network_id: '97',       // Custom network
       gas: 3000000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
       //websockets: true        // Enable EventEmitter interface for web3 (default: false)
     },

     binanceSmartChain: {
        provider: () => smartChainProvider,
       network_id: '56',       // Custom network
       gas: 3000000,           // Gas sent with each transaction (default: ~6700000)

     },



  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
   //  version: "0.6.12", // can use to set custom version else will use default in local system 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
