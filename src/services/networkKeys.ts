const apiKey = process.env.REACT_APP_INFURA_KEY ?? "";

export const NETWORK_KEYS = {
  mainnet: `https://mainnet.infura.io/v3/${apiKey}`,
  ropsten: `https://ropsten.infura.io/v3/${apiKey}`,
  kovan: `https://kovan.infura.io/v3/${apiKey}`,
  rinkeyby: `https://rinkeby.infura.io/v3/${apiKey}`,
};
