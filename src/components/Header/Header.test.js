import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { useHeaderController } from "./Header.controller";
import { useTranslation } from "react-i18next";

jest.mock("./Header.controller", () => ({
  useHeaderController: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

describe("Header", () => {
  const mockUpdateLanguage = jest.fn();

  beforeEach(() => {
    useHeaderController.mockReturnValue({ updateLanguage: mockUpdateLanguage });
    useTranslation.mockReturnValue({
      t: (key) => key,
    });
  });

  it("renders the header with logo and title", () => {
    render(<Header />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("header")).toBeInTheDocument();
  });

  it("renders the language changer with default value", () => {
    render(<Header />);
    expect(screen.getByLabelText("language:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("en")).toBeInTheDocument();
  });

  it("calls updateLanguage function on language change", () => {
    render(<Header />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "sp" } });
    expect(mockUpdateLanguage).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "sp" } })
    );
  });
});
