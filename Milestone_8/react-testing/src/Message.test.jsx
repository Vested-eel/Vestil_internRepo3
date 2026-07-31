import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "./Message";

test("renders the initial message", () => {
  render(<Message />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});

test("updates the message when button is clicked", () => {
  render(<Message />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.getByText("Button clicked!")).toBeInTheDocument();
});
