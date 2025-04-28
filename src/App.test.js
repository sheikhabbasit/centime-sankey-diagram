import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the header text", () => {
    render(<App />);
    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the add button in form", () => {
    render(<App />);
    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();
  });

  it("renders the language selector", () => {
    render(<App />);
    const languageLabel = screen.getByLabelText(/language/i);
    expect(languageLabel).toBeInTheDocument();
  });

  it("renders loading chart text", () => {
    render(<App />);
    const loadingText = screen.getByText(/loading chart/i);
    expect(loadingText).toBeInTheDocument();
  });
});
