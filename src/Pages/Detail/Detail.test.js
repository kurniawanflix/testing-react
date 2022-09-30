import { render, screen, waitFor } from "@testing-library/react";
import DetailPage from "./DetailPage";

test("renders halaman detail dengan benar", async () => {
  render(<DetailPage />);

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Back");

  const comment = await waitFor(
    () => {
      return screen.findByText("id labore ex et quam laborum");
    },
    { timeout: 5000 }
  );
  expect(comment).toBeInTheDocument();
});
