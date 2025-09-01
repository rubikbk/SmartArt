
import React, { useState } from "react";

export default function App() {
  const [balance, setBalance] = useState(250.75);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Received", amount: 100, date: "Aug 29" },
    { id: 2, type: "Sent", amount: 50, date: "Aug 30" },
  ]);

  const handleSend = () => {
    if (balance >= 10) {
      setBalance(balance - 10);
      setTransactions([
        { id: transactions.length + 1, type: "Sent", amount: 10, date: "Today" },
        ...transactions,
      ]);
    } else {
      alert("Not enough balance! 💸");
    }
  };

  const handleAdd = () => {
    setBalance(balance + 20);
    setTransactions([
      { id: transactions.length + 1, type: "Received", amount: 20, date: "Today" },
      ...transactions,
    ]);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm text-center mb-6">
        <h1 className="text-2xl font-bold text-purple-700">💎 SmartArt Wallet</h1>
        <p className="text-gray-500 mt-1">👋 Welcome, User123!</p>
        <p className="text-gray-500 mt-2">Balance</p>
        <h2 className="text-3xl font-bold text-green-600">${balance.toFixed(2)}</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm flex-1">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Transactions</h3>
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="flex justify-between bg-gray-50 p-3 rounded-xl shadow-sm"
            >
              <span className="font-medium">{tx.type}</span>
              <span
                className={
                  tx.type === "Sent" ? "text-red-500 font-bold" : "text-green-500 font-bold"
                }
              >
                {tx.type === "Sent" ? "-" : "+"}${tx.amount}
              </span>
              <span className="text-gray-400 text-sm">{tx.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSend}
          className="bg-red-400 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-500 transition"
        >
          💸 Send $10
        </button>
        <button
          onClick={handleAdd}
          className="bg-green-400 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-500 transition"
        >
          💰 Add $20
        </button>
      </div>
    </div>
  );
}
