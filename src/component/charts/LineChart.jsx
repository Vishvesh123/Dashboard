import React from "react";
import { Chart,defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

defaults.plugins.title.display=true;
defaults.plugins.title.align="center";
defaults.plugins.title.font.size=20;
defaults.plugins.title.color="black";  

function LineChart(props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
   elements:{
line:{
    tension:0.5
}
   },
   plugins:{
    title:{
        text:"Trends of intensity, likelihood, and relevance over time (years)"  
    }
   }
  };
  const intensityValues = props.data.map((item) => item.intensity);
  const likelihoodValues = props.data.map((item) => item.likelihood);
  const relevanceValues=props.data.map((item)=>item.relevance);

  const lineChart = {
    labels: props.data.map((item) => item.start_year),
    datasets: [
      {
        label: "Intensity",
        data: intensityValues,
        backgroundColor: "rgba(75, 192, 192)",
        borderColor:"rgba(75, 192, 192)"
      },
      {
        label: "Likelihood",
        data: likelihoodValues,
        backgroundColor: "rgba(75, 11, 122)",
        borderColor:"rgba(75, 11, 122)"
      }, {
        label: "Relevance",
        data: relevanceValues,
        backgroundColor: "rgba(259, 100, 192)",
        borderColor:"rgba(259, 100, 192)"
      }
    ],
  };

  return <Line data={lineChart} options={options} />;
}

export default LineChart;
