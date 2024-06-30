import React from "react";
import { useAccount, useBalance } from "wagmi";
import { useTma } from "./tma/hook";

function convertBigIntToNumber(value) {
  if (value === undefined || value === null) {
    return undefined;
  }
  return parseFloat(value.toString()) / 10 ** 18;
}

function Me() {
  const { user } = useTma();
  const account = useAccount();
  const balance = useBalance({
    address: account.address,
  });

  // Using optional chaining to access properties safely
  const userName = user?.firstName;
  const accountAddress = account?.address;
  const ogBalance = convertBigIntToNumber(balance?.data?.value);
  const coinSymbol = balance?.data?.symbol;

  return (
    <div>
      <p>user: {userName}</p>
      <p>account: {accountAddress}</p>
      <p>balance: {ogBalance} {coinSymbol}</p>
    </div>
  );
}

export default Me;
