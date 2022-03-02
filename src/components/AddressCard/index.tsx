import React from "react";

import "./styles.scss";

const rootClassName = "crypto-wallet-address-card";
interface Props {
  address: string;
  privateKey: string;
}

const AddressCard: React.FC<Props> = (props) => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__address-label`}>Your Address:</div>
      <div className={`${rootClassName}__address`}>{props.address}</div>
      <div className={`${rootClassName}__private-key-label`}>
        Your Private Key:
      </div>
      <div className={`${rootClassName}__private-key`}>{props.privateKey}</div>
    </div>
  );
};

export default AddressCard;
