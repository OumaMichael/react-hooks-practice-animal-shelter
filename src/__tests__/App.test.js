import React from "react";
import "whatwg-fetch";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "../mocks/server";
import { getAll, getByType } from "../mocks/data";
import App from "../components/App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App Component", () => {
  test("fetches all pets by default", async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/find pets/i));
    const petButtons = await screen.findAllByText(/Adopt pet/);
    expect(petButtons.length).toBe(getAll().length);
  });

  test("filters pets by type", async () => {
    render(<App />);
    const type = "micropig";
    const expectedPets = getByType(type);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: type },
    });
    fireEvent.click(screen.getByText(/find pets/i));

    await waitFor(
      () => {
        // More accurate way to count pet cards
        const petCards = screen
          .getAllByText(/Type:/)
          .map((typeElement) => typeElement.closest(".card"));

        // Verify we have the expected number of micropigs
        expect(petCards.length).toBe(expectedPets.length);

        // Verify each card has the correct type
        petCards.forEach((card) => {
          expect(card).toHaveTextContent(type);
        });
      },
      { timeout: 3000 }
    );
  });

  test("handles pet adoption", async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/find pets/i));
    const buttons = await screen.findAllByText(/Adopt pet/);
    fireEvent.click(buttons[0]);
    expect(buttons[0].textContent).toContain("Already adopted");
  });
});
