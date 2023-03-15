import Button from "./Button";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("Button component", () => {
  it("renders the children correctly", () => {
    render(<Button>Click me!</Button>);
    const buttonText = screen.getByText("Click me!");

    expect(buttonText).toBeInTheDocument();
  });

  it("has the correct styling", () => {
    render(<Button />);
    const searchBar = screen.getByRole("button");

    expect(searchBar).toHaveStyle("padding: 10px 20px");
    expect(searchBar).toHaveStyle("position: relative");
    expect(searchBar).toHaveStyle("background-color: transparent");
  });
});
