import { render, screen } from '@testing-library/react';
import Header from "./components/Header/Header";

it("should be a header", () => {
  render(<Header />);
  const title = screen.getByRole("heading",{name: /punk beers/i});
  const subtitle = screen.getByRole("heading",{name: /learn about brewdog's craft beers/i});
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
