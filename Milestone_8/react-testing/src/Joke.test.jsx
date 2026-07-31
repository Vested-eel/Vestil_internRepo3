import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Joke from "./Joke";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ value: "Test joke" }),
    }),
  );
});

test("renders joke from API", async () => {
  render(<Joke />);
  const jokeElement = await screen.findByText("Test joke");
  expect(jokeElement).toBeInTheDocument();
});
