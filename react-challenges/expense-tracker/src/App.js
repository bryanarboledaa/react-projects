import { useState } from "react";
import React from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: "10000",
    date: new Date(2022, 5, 19),
  },
  {
    title: "Car Insurance",
    amount: "10000",
    date: new Date(2021, 5, 19),
  },
  {
    title: "Brand new car",
    amount: "1000",
    date: new Date(2019, 8, 19),
  },
  {
    title: "Cellphone",
    amount: "1000",
    date: new Date(2020, 8, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
