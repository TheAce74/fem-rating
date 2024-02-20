import { fireEvent, render, screen } from "@testing-library/react";
import Circle from "./Circle";

describe("Circle", () => {
  it("should render an svg when the text 'star' is passed as its content", () => {
    render(<Circle content="star" />);
    const star = screen.getByAltText("gold star icon");
    expect(star).toBeInTheDocument();
  });

  it("should render a button when a number is passed as its content", () => {
    render(<Circle content={1} />);
    const button = screen.getByText("1");
    expect(button).toBeInTheDocument();
  });

  it("the button's background should be transparent white at first", () => {
    render(<Circle content={1} />);
    const button = screen.getByText("1");
    expect(button).toHaveClass("bg-white/5");
  });

  it("the button's background should change when clicked", () => {
    let rating: number | null = null;

    const changeRating = (num: number) => {
      rating = num;
    };

    const { rerender } = render(
      <Circle content={1} rating={rating} callback={changeRating} />
    );
    const button = screen.getByText("1");
    fireEvent.click(button);

    rerender(<Circle content={1} rating={rating} callback={changeRating} />);
    expect(button).not.toHaveClass("bg-white/5");
  });
});
