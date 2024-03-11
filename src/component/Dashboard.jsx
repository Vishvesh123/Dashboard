import React from "react";
import "./dashboard.css";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

function Dashboard(props) {
  return (
    <div className={`Dashboard${props.isVisible ? " slide-menu" : ""}`}>
      <div className="Upper">
        <div className="Left-Side">
          <div className="canvas">
            <BarChart data={props.data} />
          </div>
        </div>
        <div className="Right-Side">
          <div className="canvas">
            <PieChart data={props.data} />
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="canvas">
          <LineChart data={props.data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
