import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div id="form-container">
      <h3>Add Transaction</h3>
      <form>
        <div className="form">
          <label forHTML="transaction">Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Transaction"
          />
        </div>
        <div className="form">
          <label forHTML="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          ></input>
        </div>
      </form>
    </div>
  );
};
