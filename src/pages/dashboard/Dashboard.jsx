import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Dashboard() {
  const data = [
    { month: "January", cost: 500, profit: 200, expense: 250 },
    { month: "February", cost: 350, profit: 150, expense: 180 },
    { month: "March", cost: 600, profit: 300, expense: 280 },
    { month: "April", cost: 450, profit: 200, expense: 220 },
    { month: "May", cost: 700, profit: 400, expense: 270 },
    { month: "June", cost: 800, profit: 500, expense: 300 },
    { month: "July", cost: 900, profit: 600, expense: 280 },
    { month: "August", cost: 1000, profit: 700, expense: 320 },
    { month: "September", cost: 1200, profit: 900, expense: 350 },
    { month: "October", cost: 1300, profit: 1000, expense: 380 },
    { month: "November", cost: 1500, profit: 1200, expense: 400 },
    { month: "December", cost: 1700, profit: 1300, expense: 420 },
  ];

  const [chartData, setChartData] = useState({
    labels: data.map((e) => e.month),
    datasets: [
      {
        label: "Total",
        data: data.map((e) => e.cost),
      },
      {
        label: "Profit",
        data: data.map((e) => e.profit),
      },
      {
        label: "Expense",
        data: data.map((e) => e.expense),
      },
    ],
  });

  return (
    <div>
      <div className="w-[800px]">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
