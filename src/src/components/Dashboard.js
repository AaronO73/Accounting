import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = ({ cash, bank, revenue, expenses, points, level, day }) => {
  const data = {
    labels: ["Cash", "Bank", "Revenue", "Expenses"],
    datasets: [
      {
        label: "Financial Overview",
        data: [cash, bank, revenue, expenses],
        backgroundColor: ["#6366F1", "#818CF8", "#A5B4FC", "#F87171"],
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-5">
      <h2 className="text-2xl font-semibold mb-3">Dashboard</h2>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div>Day: <b>{day}</b></div>
        <div>Level: <b>{level}</b></div>
        <div>Points: <b>{points}</b></div>
        <div>Cash: <b>${cash}</b> | Bank: <b>${bank}</b></div>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
