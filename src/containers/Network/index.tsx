import React from "react";

import OptionSelector from "../../components/OptionSelector/OptionSelector";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { NETWORKS } from "../../utils/constants";
import { InitialNetworkState } from "../../models/common/types";

import "./styles.scss";

const rootClassName = "crypto-wallet-network";

interface Props {
  selectedNetwork: InitialNetworkState;
  setSelectedNetwork: (params: InitialNetworkState) => void;
}

const Network: React.FC<Props> = (props) => {
  const displayNetworks = () =>
    NETWORKS.map((item, index) => (
      <div className={`${rootClassName}__option-wrapper`} key={index}>
        <OptionSelector
          heading={item.name}
          selected={index === props.selectedNetwork.index}
          onClick={() => {
            props.setSelectedNetwork({
              index: index,
              name: item.name,
              value: item.network,
            });
          }}
        />
      </div>
    ));

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__heading`}>Select your network:</div>
      <div className={`${rootClassName}__wrapper`}>{displayNetworks()}</div>
      <div className={`${rootClassName}__details`}>
        <div>Selected Network : </div>
        <div className={`${rootClassName}__selected-option`}>
          {props.selectedNetwork.name}
        </div>
      </div>
      <div className={`${rootClassName}__button-wrapper`}>
        <Link to="/wallet" className={`${rootClassName}__link`}>
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
      <div className={`${rootClassName}__info`}>
        <i>Custom RPC support coming soon</i>
      </div>
    </div>
  );
};

export default Network;
