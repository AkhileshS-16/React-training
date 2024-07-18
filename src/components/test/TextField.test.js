import React from "react";
import TextField from "../TextField";
import { fireEvent, render } from "@testing-library/react";

describe("Test TextField", () => {
  test("TextField Render", () => {
    const { getByTestId } = render(<TextField />);
    getByTestId("texttest");
  });
  test("Check onChange", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextField handleSubmit={onChange} />);
    const element = getByTestId("texttest");
    fireEvent.change(element, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
    expect(element.value).toBe("test");
  });
  test("Check props", () => {
    const value = "test";
    const label = "test";
    const id = "test";
    const { getByTestId } = render(
      <TextField value={value} id={id} placeholder={label} />
    );
    const element = getByTestId("texttest");
    expect(element.value).toBe(value);
    expect(element.id).toBe(id);
  });
  test("check snapshot", () => {
    const value = "test";
    const label = "test";
    const id = "test";
    const { getByTestId } = render(
      <TextField value={value} id={id} label={label} />
    );
    const element = getByTestId("texttest");
    expect(element).toMatchSnapshot();
  });
});
