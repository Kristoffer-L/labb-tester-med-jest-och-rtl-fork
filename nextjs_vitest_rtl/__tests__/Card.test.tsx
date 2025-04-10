import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "../app/components/Card";
import type { CardProps } from "../app/components/Card";

describe("Card component", () => {
  test("renders content based on props", () => {
    const testProps: CardProps = {
      title: "title",
      description: "description",
      image: "/image.jpg",
      buttonText: "buttonText",
    };

    render(<Card {...testProps} />);

    const heading = screen.getByRole("heading", { level: 2, name: testProps.title });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(testProps.description);
    expect(paragraph).toBeInTheDocument();

    const image = screen.getByAltText(testProps.title);
    expect(image).toHaveAttribute("src", testProps.image);

    const button = screen.getByRole("button", { name: testProps.buttonText });
    expect(button).toBeInTheDocument();
  });
});
