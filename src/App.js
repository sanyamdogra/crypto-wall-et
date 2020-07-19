import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import Network from "./containers/Network/Network";
import Wallet from "./containers/Wallet/Wallet";

function App() {
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [balance, setBalance] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState({
    index: 0,
    name: "Mainnet",
    value: "https://mainnet.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
  });
  const dataNetwork = [
    {
      name: "Mainnet",
      network: "https://mainnet.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    },
    {
      name: "Ropsten",
      network: "https://ropsten.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    },
    {
      name: "Kovan",
      network: "https://kovan.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    },
    {
      name: "Rinkeby",
      network: "https://rinkeby.infura.io/v3/afb9e0010c224eabbbfbf79ab768bcfb",
    },
  ];

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/network">
          <Network
            selected={selectedNetwork}
            setSelected={setSelectedNetwork}
            data={dataNetwork}
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
    </div>
  );
}

export default App;
