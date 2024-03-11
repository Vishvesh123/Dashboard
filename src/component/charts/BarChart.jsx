import React from "react";
import { Chart, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function BarChart(props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      title: {
        text: " The intensities of different countries",
      },
    },
  };
  const intensityValues = props.data.map((item) => item.intensity);

  const barChart = {
    labels: props.data.map((item) => item.country),
    datasets: [
      {
        label: "intensity",
        data: intensityValues,
        backgroundColor: "rgba(55, 199, 132)",
      },
    ],
  };

  return <Bar data={barChart} options={options} />;
}

export default BarChart;
