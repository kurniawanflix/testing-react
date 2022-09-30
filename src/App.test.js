import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render App dengan benar", () => {
  render(<App />);

  const title = screen.getByText(/why do we need test?/i);
  expect(title).toBeInTheDocument();
});
