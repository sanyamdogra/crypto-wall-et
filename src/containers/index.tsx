import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Network from "./Network";
import Wallet from "./Wallet/Wallet";

import { InitialNetworkState } from "../models/common/types";

import { INITIAL_NETWORK_STATE } from "./constants";

import "./styles.scss";

const rootClassName = "crypto-wallet";

const App: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState<InitialNetworkState>(
    INITIAL_NETWORK_STATE
  );

  return (
    <div className={rootClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/network">
            <Network
              selectedNetwork={selectedNetwork}
              setSelectedNetwork={setSelectedNetwork}
            />
          </Route>
          <Route exact path="/wallet">
            <Wallet
              selected={selectedNetwork}
              setSelected={setSelectedNetwork}
              address={address}
              setAddress={setAddress}
              privateKey={privateKey}
              setPrivateKey={setPrivateKey}
              selectedNetwork={selectedNetwork}
              balance={balance}
              setBalance={setBalance}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
