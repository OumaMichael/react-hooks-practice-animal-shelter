import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "../components/Filters";

const FILTERS_STATE = {
  type: "all",
};

test("calls the `onChangeType` prop callback when the animal type select changes", () => {
  const onChangeType = jest.fn();
  render(<Filters onChangeType={onChangeType} filters={FILTERS_STATE} />);
  // Use getByRole for the select element
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "dog" } });
  expect(onChangeType).toHaveBeenCalled();
});

test('calls the `onFindPetsClick` callback prop when the "Find pets" button is clicked', () => {
  const onFindPetsClick = jest.fn();
  render(<Filters onFindPetsClick={onFindPetsClick} filters={FILTERS_STATE} />);
  // Use getByText with exact text match
  const button = screen.getByText("Find Pets");
  fireEvent.click(button);
  expect(onFindPetsClick).toHaveBeenCalled();
});
