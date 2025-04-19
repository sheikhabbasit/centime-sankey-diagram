import React from "react";
import { useChartController } from "./chart.controller";
import styles from "./ChartRepresentation.module.css";
import Chart from "react-google-charts";

function ChartRepresentation() {
  const { loading, t, dataStreams } = useChartController();
  if (loading) {
    return (
      <div className={styles.chartContainer}>
        <p>Loading chart...</p>
      </div>
    );
  }

  // Ensure flows is an array and transform it to 2D array for Sankey

  const chartData = [
    ["Incoming", "Outgoing", "Amount"], // Header row
    ...dataStreams.map((flow) => [
      t(flow.incoming),
      t(flow.outgoing),
      flow.amount,
    ]),
  ];

  return (
    <div className={styles.chartContainer}>
      <Chart
        chartType="Sankey"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          sankey: {
            node: {
              label: { fontSize: 14 },
              interactivity: true,
            },
          },
        }}
      />
    </div>
  );
}

export default ChartRepresentation;
