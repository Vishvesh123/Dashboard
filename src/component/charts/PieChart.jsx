import React from "react";
import { Chart,defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
defaults.plugins.title.display=true;
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=20;
defaults.plugins.title.color="black";


function PieChart(props) {
  
  const intensityValues = props.data.map((item) => item.intensity);
  const likelihoodChart = {
    labels: props.data.map((item) => item.topic),
    datasets: [
      {
       
        data: intensityValues,
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(155, 59, 64, 0.6)',
            'rgba(115, 192, 112, 0.6)',
            'rgba(15, 102, 255, 0.6)',
            'rgba(25, 159, 64, 0.6)',
          ],
          borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'right', 
      },
      title:{
        text:"Topic Distribution"  
    }
    },
    
       
  };
  return <Pie data={likelihoodChart} options={chartOptions} />;
}

export default PieChart;
