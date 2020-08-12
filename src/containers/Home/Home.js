import React, { useState } from "react";
import styles from "./Home.module.css";
import { ReactComponent as BgVector } from "../../assets/bgVector.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Wallet from "../Wallet/Wallet";
import Transaction from "../Transaction/Transaction";

const Home = () => {
  const keys = {
    mainnet: "https://mainnet.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    ropsten: "https://ropsten.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    kovan: "https://kovan.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    rinkeby: "https://rinkeby.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
  };

  const [step, setStep] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [balance, setBalance] = useState("");

  function generateComponent(step) {
    switch (step) {
      case 1:
        return (
          <Wallet
            step={step}
            changeStepScreen={setStep}
            address={address}
            setAddress={setAddress}
            privateKey={privateKey}
            setPrivateKey={setPrivateKey}
            keys={keys}
          />
        );
      case 2:
        return (
          <Transaction
            balance={balance}
            setBalance={setBalance}
            address={address}
            setAddress={setAddress}
            privateKey={privateKey}
            setPrivateKey={setPrivateKey}
          />
        );

      default:
        return <Wallet step={step} changeStepScreen={setStep} />;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <BgVector className={styles.bgVector} />
        </div>
        <div className={styles.right}>
          {!step ? (
            <>
              <div className={styles.heading}>
                Crypto-Wall-Et <span className={styles.version}>v1</span>
              </div>
              <div className={styles.buttonWrapper}>
                <Link to="/network" className={styles.noLink}>
                  <Button
                    bgColor={"#89c9b8"}
                    textColor={"#092532"}
                    padding={"1em 4em"}
                    borderRadius={"6px"}
                    fontWeight={"700"}
                    active
                    // onClick={() => {
                    //   setStep(1);
                    // }}
                  >
                    Let's Start
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            generateComponent(step)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
