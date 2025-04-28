import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useFormController } from "./form.controller";
import Form from "./Form";

jest.mock("./form.controller", () => ({
  useFormController: jest.fn(),
}));

const mockDataStreams = [
  { id: 1, incoming: "Salary", outgoing: "Rent", amount: 1000 },
  { id: 2, incoming: "Freelance", outgoing: "Groceries", amount: 500 },
];

describe("Form", () => {
  beforeEach(() => {
    useFormController.mockReturnValue({
      dataStreams: mockDataStreams,
      handleEdit: jest.fn(),
      handleDelete: jest.fn(),
      handleSubmit: jest.fn(),
      formData: { id: null, incoming: "", outgoing: "", amount: "" },
      setFormData: jest.fn(),
      t: (key) => key,
    });
  });

  it("renders a list of flows", () => {
    render(<Form />);
    expect(screen.getByText("Salary")).toBeInTheDocument();
    expect(screen.getByText("Rent")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("Freelance")).toBeInTheDocument();
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
  });

  it("calls handleEdit and handleDelete when buttons are clicked", () => {
    const { handleEdit, handleDelete } = useFormController();
    render(<Form />);
    fireEvent.click(screen.getAllByText("edit")[0]);
    fireEvent.click(screen.getAllByText("delete")[0]);
    expect(handleEdit).toHaveBeenCalledWith(1);
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  it("calls handleSubmit when the form is submitted", () => {
    const { handleSubmit } = useFormController();
    render(<Form />);
    fireEvent.submit(screen.getByTestId("form"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
