import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import AddressCard from "..";

afterEach(cleanup);

describe("Address card tests", () => {
  const initialProps = {
    address: "dummy-address",
    privateKey: "dummy-private-key",
  };

  test("it should have a test id", () => {
    const { getByTestId } = render(
      <AddressCard
        address={initialProps.address}
        privateKey={initialProps.privateKey}
      />
    );
    expect(getByTestId("address-card")).toBeDefined();
  });

  test("it should have correct address and private key", () => {
    const { rerender } = render(
      <AddressCard
        address="dummy-address-value"
        privateKey="new-dummy-private-key"
      />
    );
    expect(screen.getByTestId("address-value")).toHaveTextContent(
      "dummy-address-value"
    );
    expect(screen.getByTestId("private-key")).toHaveTextContent(
      "new-dummy-private-key"
    );

    rerender(
      <AddressCard
        address="dummy-address-value-2"
        privateKey="new-dummy-private-key-2"
      />
    );

    expect(screen.getByTestId("address-value")).toHaveTextContent(
      "dummy-address-value-2"
    );
    expect(screen.getByTestId("private-key")).toHaveTextContent(
      "new-dummy-private-key-2"
    );
  });
});
