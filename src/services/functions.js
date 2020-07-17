import Web3 from "web3";
// import axios from "axios";

const web3 = new Web3(
  "https://ropsten.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb"
);

export const createAccount = () => {
  try {
    let address = web3.eth.accounts.create(web3.utils.randomHex(32));
    return address;
  } catch (err) {
    throw err.response;
  }
};

export const loginPrivateKey = (privateAddress) => {
  try {
    let address = web3.eth.accounts.privateKeyToAccount(privateAddress);
    return address;
  } catch (err) {
    throw err.response;
  }
};

export const checkBalance = async (address) => {
  try {
    let balance = await web3.eth
      .getBalance(address)
      .then((bal) => web3.utils.fromWei(bal, "ether"));
    return balance;
  } catch (err) {
    throw err.response;
  }
};
