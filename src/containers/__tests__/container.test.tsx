import React from "react";
import { render } from "@testing-library/react";
import App from "..";

test("should load the initial api key", () => {
  expect(process.env.REACT_APP_INFURA_KEY).toBeDefined();
});

test("renders the crypto wallet heading", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Crypto-Wall-Et/i);
  expect(headingElement).toBeInTheDocument();
});
