import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // ..nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you! if the button was not clicked!", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // ..nothing

    // Assert
    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' If the button was clicked!", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
