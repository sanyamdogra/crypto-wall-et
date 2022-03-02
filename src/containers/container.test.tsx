import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("renders the crypto wallet heading", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Crypto-Wall-Et/i);
  expect(headingElement).toBeInTheDocument();
});
