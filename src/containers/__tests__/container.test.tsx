import React from "react";
import { render, screen } from "@testing-library/react";
import App from "..";

test("should load the initial api key", () => {
  expect(process.env.REACT_APP_INFURA_KEY).toBeDefined();
});

test("renders the crypto wallet heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Crypto-Wall-Et/i);
  expect(headingElement).toBeInTheDocument();
});
