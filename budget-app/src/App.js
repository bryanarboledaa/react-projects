import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div id="main-container">
        <Header />
        <div id="submain-container">
          <div id="income-transaction-container">
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
          </div>
          <div id="transactionlist-container">
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
