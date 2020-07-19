import React from "react";
import styles from "./Network.module.css";
import OptionSelector from "../../components/OptionSelector/OptionSelector";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Network = (props) => {
  const displayNetworks = () =>
    props.data.map((item, index) => (
      <div className={styles.optionsWrapper}>
        <OptionSelector
          heading={item.name}
          selected={index === props.selected.index ? true : false}
          onClick={() => {
            props.setSelected({
              index: index,
              name: item.name,
              value: item.network,
            });
          }}
        />
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Select your network:</div>
      <div className={styles.wrapper}>{displayNetworks()}</div>
      <div className={styles.details}>
        <div>Selected Network : </div>
        <div className={styles.selectedOption}>{props.selected.name}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <Link to="/wallet" className={styles.noLink}>
          {" "}
          <Button
            bgColor={"#31AEF9"}
            textColor={"#092532"}
            padding={"1em 4em"}
            borderRadius={"6px"}
            fontWeight={"700"}
            active
          >
            Proceed
          </Button>
        </Link>
      </div>
      <div className={styles.info}>
        <i>Custom RPC support coming soon</i>
      </div>
    </div>
  );
};

export default Network;
