import React, { useState } from "react";

const Events = ({ cash, setCash, bank, setBank, revenue, setRevenue, expenses, setExpenses, points, setPoints }) => {
  const [eventShown, setEventShown] = useState(false);

  const triggerEvent = () => {
    const choice = Math.random();
    if (choice < 0.5) {
      const cost = Math.floor(Math.random() * 100) + 20;
      setExpenses(expenses + cost);
      setCash(cash - cost);
      setPoints(points - 5);
      alert(`💸 Unexpected office expense of $${cost}. Points -5`);
    } else {
      const bonus = Math.floor(Math.random() * 200) + 50;
      setRevenue(revenue + bonus);
      setCash(cash + bonus);
      setPoints(points + 10);
      alert(`🎉 Client paid extra $${bonus}. Points +10`);
    }
    setEventShown(true);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-5">
      <h2 className="text-2xl font-semibold mb-3">Random Event</h2>
      {!eventShown ? (
        <button onClick={triggerEvent} className="bg-yellow-500 text-white px-4 py-2 rounded">
          Trigger Event
        </button>
      ) : (
        <p>Event handled for today ✅</p>
      )}
    </div>
  );
};

export default Events;
