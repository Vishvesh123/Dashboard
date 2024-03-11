import React from "react";
import { Bar, Pie } from "react-chartjs-2";

function SectorFilter(props) {
  const sectorData_environment = props.data.filter(
    (item) => item.sector === "Environment"
  );

  const RelevanceValues = sectorData_environment.map((item) => item.relevance);
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      title: {
        text: " The Relevance of different topic for the Sector Environment",
      },
    },
  };

  const barChart = {
    labels: sectorData_environment.map((item) => item.topic),

    datasets: [
      {
        label: "Relevance",
        data: RelevanceValues,
        backgroundColor: "rgba(55, 199, 132)",
      },
    ],
  };

  const intensityValues = sectorData_environment.map((item) => item.intensity);

  const pieChart = {
    labels: sectorData_environment.map((item) => item.topic),
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
        {props.sectorDataArray.map((item) => (
          <div key={item.sector} className="chart">
            <h3>{item.sector}</h3>
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

export default SectorFilter;
