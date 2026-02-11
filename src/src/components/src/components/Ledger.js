import React, { useState } from "react";

const Ledger = ({
  ledger,
  setLedger,
  cash,
  setCash,
  bank,
  setBank,
  revenue,
  setRevenue,
  expenses,
  setExpenses,
}) => {
  const [account, setAccount] = useState("Cash");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Revenue");

  const addTransaction = () => {
    const amt = parseInt(amount);
    if (!amt) return alert("Enter valid number");

    if (account === "Cash") setCash(cash + amt);
    if (account === "Bank") setBank(bank + amt);
    if (type === "Revenue") setRevenue(revenue + amt);
    if (type === "Expenses") setExpenses(expenses + amt);

    setLedger([...ledger, { account, amount: amt, type }]);
    setAmount("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-5">
      <h2 className="text-2xl font-semibold mb-3">Ledger</h2>
      <div className="flex gap-3 mb-3">
        <select value={account} onChange={(e) => setAccount(e.target.value)} className="p-2 border rounded">
          <option>Cash</option>
          <option>Bank</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 border rounded"
        />
        <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
          <option>Revenue</option>
          <option>Expenses</option>
        </select>
        <button onClick={addTransaction} className="bg-indigo-500 text-white px-4 rounded">Add</button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Account</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {ledger.map((t, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{t.account}</td>
              <td className="p-2">{t.type}</td>
              <td className="p-2">${t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ledger;
