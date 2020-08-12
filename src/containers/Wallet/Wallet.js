import React, { useState } from "react";
import { createAccount, loginPrivateKey } from "../../services/functions";
import Button from "../../components/Button/Button";
import AddressCard from "../../components/AddressCard/AddressCard";
import styles from "./Wallet.module.css";
import Transaction from "../../containers/Transaction/Transaction";
import { checkBalance } from "../../services/functions";

const Wallet = (props) => {
  const [showTransaction, setShowTransaction] = useState(false);
  const privateKeyValueHandler = (e) => {
    
    let value = e.target.value
    props.setPrivateKey(e.target.value);
    console.log(value);
  };

  const privateKeyHandler = async () => {
    console.log(props.privateKey)
    const add = loginPrivateKey(props.selectedNetwork.value, props.privateKey);
    console.log(add);
    props.setAddress(add.address);
    // let balance = await checkBalance(
    //   props.selectedNetwork.value,
    //   props.address
    // );
    // console.log(balance);
    // props.setBalance(balance);
    setShowTransaction(true);
  };

 

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div>Selected Network : </div>
        <div className={styles.selectedOption}>{props.selected.name}</div>
        {props.address && (
          <>
            <div className={styles.label}>Your Address : </div>
            <div className={styles.selectedAddress}>{props.address}</div>
          </>
        )}
        {props.privateKey && (
          <>
            <div className={styles.label}>Your PK : </div>
            <div className={styles.selectedAddress}>{props.privateKey}</div>
          </>
        )}
        {props.balance && (
          <>
            <div className={styles.label}>Your Balance : </div>
            <div className={styles.selectedOption}>{props.balance} ETH</div>
          </>
        )}
      </div>
      {!showTransaction ? (
        <div className={styles.mainBody}>
          {" "}
          <Button
            bgColor={"#89c9b8"}
            textColor={"#092532"}
            padding={"1em 4em"}
            borderRadius={"6px"}
            fontWeight={"700"}
            active
            onClick={() => {
              const add = createAccount(props.selectedNetwork.value);
              console.log(add);
              props.setAddress(add.address);
              props.setPrivateKey(add.privateKey);
            }}
          >
            Create Account
          </Button>
          <div className={styles.or}>OR</div>
          <input
            className={styles.input}
            onChange={privateKeyValueHandler}
            // value={privateKey}
            placeholder="Enter Private Key"
          />
          <Button
            bgColor={"#31AEF9"}
            textColor={"#092532"}
            padding={"1em 1.8em"}
            borderRadius={"6px"}
            fontWeight={"700"}
            active
            onClick={privateKeyHandler}
          >
            Login using Private Key
          </Button>
          {props.address && (
            <div className={styles.addressWrapper}>
              <AddressCard
                address={props.address}
                privateKey={props.privateKey}
              />
              <Button
                bgColor={"#73ef62"}
                textColor={"#092532"}
                padding={"1em 4em"}
                borderRadius={"6px"}
                fontWeight={"700"}
                active
                onClick={async () => {
                  let balance = await checkBalance(
                    props.selectedNetwork.value,
                    props.address
                  );
                  console.log(balance);
                  props.setBalance(balance);
                  setShowTransaction(true);
                }}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Transaction
          balance={props.balance}
          setBalance={props.setBalance}
          address={props.address}
          setAddress={props.setAddress}
          selectedNetwork={props.selectedNetwork}
          privateKey={props.privateKey}
          setPrivateKey={props.setPrivateKey}
        />
      )}
    </div>
  );
};

export default Wallet;
