import React from "react";
import styles from "./AddressCard.module.css";
import Button from '../Button/Button'

const AddressCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.addressLabel}>Your Address:</div>
      <div className={styles.address}>{props.address}</div>
      <div className={styles.privateKeyLabel}>
          Your Private Key:
      </div>
      <div className={styles.privateKey}>{props.privateKey}</div>

      <Button
        bgColor={"#73ef62"}
        textColor={"#092532"}
        padding={"1em 4em"}
        borderRadius={"6px"}
        fontWeight={"700"}
        active
        onClick={()=>{props.nextHandler(2)}
        }
      >
       Next
      </Button>
    </div>
  );
};

export default AddressCard;
