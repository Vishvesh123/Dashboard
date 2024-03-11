import React from "react";
import "./filter.css";

import { Chart, defaults } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function YearFilter(props) {
  const yearData_2016 = props.data.filter((item) => item.end_year === 2016);

  const relevanceValues = yearData_2016.map((item) => item.relevance);
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      title: {
        text: " The Relevance of different Topics in end year 2016",
      },
    },
  };

  const barChart = {
    labels: yearData_2016.map((item) => item.topic),

    datasets: [
      {
        label: "intensity",
        data: relevanceValues,
        backgroundColor: "rgba(55, 199, 132)",
      },
    ],
  };

  const intensityValues = yearData_2016.map((item) => item.intensity);

  const pieChart = {
    labels: yearData_2016.map((item) => item.pestle),
    datasets: [
      {
        data: intensityValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(155, 59, 64, 0.6)",
          "rgba(115, 192, 112, 0.6)",
          "rgba(15, 102, 255, 0.6)",
          "rgba(25, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        text: "Topic Distribution",
      },
    },
  };

  return (
    <div className={`container-filter${props.isVisible ? " slide-menu2" : ""}`}>
      <div style={{ marginTop: "80px" }} className="Upper-Chart">
        {props.yearDataArray.map((item) => (
          <div key={item.end_year} className="chart">
            <h3>{item.end_year}</h3>
            <div className="charts">
              <h4>Total Intensity</h4>
              <h3>{item.intensity}</h3>
            </div>
            <div className="charts">
              <h4>Total Likelihood</h4>
              <h3>{item.likelihood}</h3>
            </div>
            <div className="charts">
              <h4>Total Relevance</h4>
              <h3>{item.relevance}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="Lower-Chart">
        <div className="chart1">
          <div style={{ height: "300px", width: "500px" }}>
            <Bar data={barChart} options={options} />
          </div>
        </div>
        <div className="chart2">
          <div style={{ height: "300px", width: "500px" }}>
            <Pie data={pieChart} options={Options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearFilter;
