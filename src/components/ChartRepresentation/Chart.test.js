import React from "react";
import { render, screen } from "@testing-library/react";
import { useChartController } from "./chart.controller";
import ChartRepresentation from "./ChartRepresentation";

jest.mock("./chart.controller", () => ({
  useChartController: jest.fn(),
}));

const mockChartData = [
  ["Incoming", "Outgoing", "Amount"],
  ["Salary", "Bills", 3000],
  ["Salary", "Savings", 2000],
  ["Bills", "Electric Bill", 1000],
  ["Bills", "Mobile Bill", 2000],
];

describe("ChartRepresentation", () => {
  it("renders a loading message when loading is true", () => {
    useChartController.mockReturnValue({ loading: true, chartData: [] });
    render(<ChartRepresentation />);
    expect(screen.getByText("Loading chart...")).toBeInTheDocument();
  });

  it("renders a chart when loading is false", () => {
    useChartController.mockReturnValue({
      loading: false,
      chartData: mockChartData,
    });
    render(<ChartRepresentation />);
  });

  it("renders a chart with the correct height and width", () => {
    useChartController.mockReturnValue({
      loading: false,
      chartData: mockChartData,
    });
    render(<ChartRepresentation />);
    const chart = screen.getByTestId("chart");
    expect(chart.style.height).toBe("600px");
    expect(chart.style.width).toBe("98%");
  });
});
