import Web3 from "web3";
// import axios from "axios";


// const web3 = new Web3(keys.ropsten);

export const createAccount = (key) => {
  try {
    console.log(key);
    const web3 = new Web3(key);
    let address = web3.eth.accounts.create(web3.utils.randomHex(32));
    return address;
  } catch (err) {
    throw err.response;
  }
};

export const loginPrivateKey = (key,privateAddress) => {
  try {
    console.log(key);
    const web3 = new Web3(key);
    let address = web3.eth.accounts.privateKeyToAccount(privateAddress);
    return address;
  } catch (err) {
    throw err.response;
  }
};

export const checkBalance = async (key,address) => {
  try {
    console.log(key);
    const web3 = new Web3(key);
    let balance = await web3.eth
      .getBalance(address)
      .then((bal) => web3.utils.fromWei(bal, "ether"));
    return balance;
  } catch (err) {
    throw err.response;
  }
};
