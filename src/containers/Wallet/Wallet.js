import React from "react";
import { createAccount, loginPrivateKey } from "../../services/functions";
import Button from "../../components/Button/Button";
import AddressCard from "../../components/AddressCard/AddressCard";
import styles from "./Wallet.module.css";

const Wallet = (props) => {
  const privateKeyhandler = (e) => {
    props.setPrivateKey(e.target.value);
    console.log(props.privateKey);
  };

  return (
    <div className={styles.container}>
      <Button
        bgColor={"#89c9b8"}
        textColor={"#092532"}
        padding={"1em 4em"}
        borderRadius={"6px"}
        fontWeight={"700"}
        active
        onClick={() => {
          const add = createAccount();
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
        onChange={privateKeyhandler}
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
        onClick={() => {
          const add = loginPrivateKey(props.privateKey);
          console.log(add);
          props.setAddress(add.address);
          props.changeStepScreen(2);
        }}
      >
        Login using Private Key
      </Button>

      {props.address && (
        <div className={styles.addressWrapper}>
          <AddressCard
            address={props.address}
            privateKey={props.privateKey}
            nextHandler={props.changeStepScreen}
          />
        </div>
      )}
    </div>
  );
};

export default Wallet;
