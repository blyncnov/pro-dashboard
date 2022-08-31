import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../data";

const BarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "blue", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderWidth: 2,
        hoverOffset: 4,
        rotation: 4,
      },
    ],
  });
  return (
    <>
      <div className="util-chart-container">
        <Bar data={userData} />
      </div>
    </>
  );
};

export default BarChart;
