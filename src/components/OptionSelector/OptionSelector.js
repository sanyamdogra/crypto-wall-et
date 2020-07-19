import React from "react";
import styles from "./OptionSelector.module.css";

const OptionSelector = (props) => {
  return (
    <div className={props.selected ? styles.containerSelected : styles.container} onClick={props.onClick}>
      <div className={styles.heading}>
        {props.heading}
      </div>
    </div>
  );
};

export default OptionSelector;
