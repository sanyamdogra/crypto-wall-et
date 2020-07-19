import React,{useState} from "react";
import Button from "../../components/Button/Button";
import styles from "./Transaction.module.css";
import { checkBalance } from "../../services/functions";

const Transaction = (props) => {

const[newBalance, setNewBalance] = useState("")  
const[newAddress, setNewAddress] = useState("")
  const addressHandler = (e) => {
    setNewAddress(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}> Transaction</div>

      <div className={styles.label}>To: </div>
      <input
        // onChange={privateKeyhandler}
        // value={privateKey}
        className={styles.input}
        placeholder="Enter Address"
      />
      <div className={styles.label}>Amount: </div>
      <input
        // onChange={privateKeyhandler}
        // value={privateKey}
        className={styles.input}
        placeholder="Enter Value"
      />
      <div className={styles.buttonWrapper}>
        <Button
          bgColor={"#73ef62"}
          textColor={"#092532"}
          padding={"1em 4em"}
          borderRadius={"6px"}
          fontWeight={"700"}
          active
          onClick={async () => {
            // const balance = await checkBalance(address);
            // console.log(balance);
            // setBalance(balance);
          }}
        >
          Send
        </Button>
      </div>
      <div className={styles.headingSub}> or maybe</div>

      <input
        onChange={addressHandler}
        value={newAddress}
        className={styles.input}
        placeholder="Enter Address"
      />
      <div className={styles.balanceWrapper}>
        <Button
          bgColor={"#31AEF9"}
          textColor={"#092532"}
          padding={"1em 1.8em"}
          borderRadius={"6px"}
          fontWeight={"700"}
          active
          onClick={async () => {
            let balance = await checkBalance(
              props.selectedNetwork.value,
             newAddress
            );
            console.log(balance);
            setNewBalance(balance)
          }}
        >
          View balance
        </Button>
        {newBalance && (
          <div className={styles.balanceLabel}>{newBalance} ETH</div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
