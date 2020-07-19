import React from "react";
import styles from "./AddressCard.module.css";

const AddressCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.addressLabel}>Your Address:</div>
      <div className={styles.address}>{props.address}</div>
      <div className={styles.privateKeyLabel}>Your Private Key:</div>
      <div className={styles.privateKey}>{props.privateKey}</div>

    
    </div>
  );
};

export default AddressCard;
