import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";

describe("Check if button works", () => {
  test("First", () => {
    const { getByTestId } = render(<Button text="click" />);
    const element = getByTestId("button-test-id");
    expect(element).toBeTruthy();
  });

  test("Second", () => {
    const text = "click";
    const { getByText } = render(<Button text={text} />);
    getByText(text);
  });

  test("check if onClick is triggered", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button handleSubmit={onClick} />);
    const element = getByTestId("button-test-id");
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });

  test("Check if snapshots are matched properly", () => {
    const onClick = jest.fn();
    const text = "Click";
    const { asFragment } = render(
      <Button text={text} handleSubmit={onClick} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
