import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li class="minus">
      {transaction.text} <span>{transaction.amount}</span>
      <button class="delete-btn">x</button>
    </li>
  );
};
