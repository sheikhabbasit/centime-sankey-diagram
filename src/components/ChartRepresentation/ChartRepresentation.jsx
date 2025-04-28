import React from "react";
import { useChartController } from "./chart.controller";
import styles from "./ChartRepresentation.module.css";
import Chart from "react-google-charts";

function ChartRepresentation() {
  const { loading, chartData } = useChartController();
  if (loading) {
    return (
      <div
        style={{ height: "600px", width: "98%" }}
        className={styles.chartContainer}
      >
        <p>Loading chart...</p>
      </div>
    );
  }

  return (
    <div
      data-testid="chart"
      style={{ height: "600px", width: "98%" }}
      className={styles.chartContainer}
    >
      <Chart
        chartType="Sankey"
        width="100%"
        height="600px"
        data={chartData}
        options={{
          sankey: {
            link: {
              colorMode: "gradient",
              colors: ["#a6cee3", "#1f78b4", "#b2df8a"],
            },
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
