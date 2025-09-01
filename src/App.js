import React, { useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(100);
  const [transactions, setTransactions] = useState([]);

  const sendMoney = () => {
    const amount = 10;
    if (balance >= amount) {
      setBalance(balance - amount);
      setTransactions([...transactions, { type: "Sent", amount }]);
    }
  };

  const addMoney = () => {
    const amount = 20;
    setBalance(balance + amount);
    setTransactions([...transactions, { type: "Received", amount }]);
  };

  return (
    <div className="App">
      <h1>SmartArt Wallet</h1>
      <h2>Balance: ${balance}</h2>
      <button onClick={sendMoney}>Send $10</button>
      <button onClick={addMoney}>Add $20</button>
      <h3>Transactions:</h3>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>{t.type} ${t.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
