import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import Counter from "./counter";

test("Counter component starts at 0 and increments by 1 when clicking the button", () => {
  render(<Counter />);
  // Start with 0
  expect(screen.getByRole("heading", { level: 2, name: "0" })).toBeInTheDocument();
  // By clicking button, incremenets by 1
  fireEvent.click(screen.getByRole("button", { name: "+"}));
  // Shows 1
  expect(screen.getByRole("heading", { level: 2, name: "1" })).toBeInTheDocument();
  // By clicking button, decrements by 1
  fireEvent.click(screen.getByRole("button", { name: "-" }));
  // Shows 0
  expect(screen.getByRole("heading", { level: 2, name: "0" })).toBeInTheDocument();
});


