import React, { useState, useEffect } from "react";
import Ledger from "./components/Ledger";
import DailyTasks from "./components/DailyTasks";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";

function App() {
  const [cash, setCash] = useState(500);
  const [bank, setBank] = useState(1000);
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState("Junior Accountant");
  const [day, setDay] = useState(1);
  const [ledger, setLedger] = useState([]);

  // Handle leveling
  useEffect(() => {
    if (points >= 50 && points < 100) setLevel("Accountant");
    if (points >= 100) setLevel("Senior Accountant");
  }, [points]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-5 text-indigo-800">
        FinanceMaster Simulator
      </h1>

      <Dashboard
        cash={cash}
        bank={bank}
        revenue={revenue}
        expenses={expenses}
        points={points}
        level={level}
        day={day}
      />

      <Ledger
        ledger={ledger}
        setLedger={setLedger}
        cash={cash}
        setCash={setCash}
        bank={bank}
        setBank={setBank}
        revenue={revenue}
        setRevenue={setRevenue}
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <DailyTasks
        cash={cash}
        setCash={setCash}
        bank={bank}
        setBank={setBank}
        revenue={revenue}
        setRevenue={setRevenue}
        expenses={expenses}
        setExpenses={setExpenses}
        ledger={ledger}
        setLedger={setLedger}
        points={points}
        setPoints={setPoints}
        day={day}
        setDay={setDay}
      />

      <Events
        cash={cash}
        setCash={setCash}
        bank={bank}
        setBank={setBank}
        revenue={revenue}
        setRevenue={setRevenue}
        expenses={expenses}
        setExpenses={setExpenses}
        points={points}
        setPoints={setPoints}
      />
    </div>
  );
}

export default App;
