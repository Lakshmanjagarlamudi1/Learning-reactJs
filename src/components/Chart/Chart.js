import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
  console.log(props.dataPoint)
  const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
  console.log(dataPointValues)
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum)

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
