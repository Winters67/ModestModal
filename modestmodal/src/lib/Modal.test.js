import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./Modal.css";

describe("Modal", () => {
  it("should render without crashing", () => {
    render(<Modal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("should display the title and message", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Test Title"
        message="Test Message"
      />
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Test Title");
    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });

  it("should close when clicked outside", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByRole("dialog"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should not close when clicked inside", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText("Title"));
    expect(mockOnClose).toHaveBeenCalledTimes(0);
  });
});
