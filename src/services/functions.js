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

export const loginPrivateKey = (key, privateAddress) => {
  try {
    console.log(key);
    const web3 = new Web3(key);
    let address = web3.eth.accounts.privateKeyToAccount(privateAddress);
    return address;
  } catch (err) {
    throw err.response;
  }
};

export const checkBalance = async (key, address) => {
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

export const sendEther = (key, toAddress, amount, privateKey) => {
  try {
    const web3 = new Web3(key);

    console.log(privateKey);
    var txn = {
      to: toAddress,
      value: web3.utils.toWei(amount, "ether"),
      gas: 100000,
    };

    let returnResult = []

    web3.eth.accounts.signTransaction(txn, privateKey).then((result) => {
      console.log("signed", result);

      console.log(result.transactionHash);
      returnResult.push(result.transactionHash)
      web3.eth
        .sendSignedTransaction(result.rawTransaction)
        .on("reciept", (receipt) => {
          console.log("receipt send ether:", receipt);
        });
    });

    return returnResult;
  } catch (err) {
    throw err.response;
  }
};
