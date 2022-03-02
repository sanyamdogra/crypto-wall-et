import React, { useState } from "react";
import styles from "./Home.module.css";
import { ReactComponent as BgVector } from "../../assets/bgVector.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Wallet from "../Wallet/Wallet";
import Transaction from "../Transaction/Transaction";

const Home: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [balance, setBalance] = useState<string>("");

  function generateComponent(step: number) {
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
        return <>Oops!</>;
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
