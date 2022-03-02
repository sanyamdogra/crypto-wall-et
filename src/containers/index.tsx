import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Network from "./Network/Network";
import Wallet from "./Wallet/Wallet";

import { INITIAL_NETWORK_STATE } from "./constants";

import "./styles.scss";

const rootClassName = "crypto-wallet";

const App: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState(INITIAL_NETWORK_STATE);

  return (
    <div className={rootClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/network">
            <Network
              selected={selectedNetwork}
              setSelected={setSelectedNetwork}
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
