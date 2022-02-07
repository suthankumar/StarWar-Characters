import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Pagination from ".";

test("Should display the correct page number", () => {
  render(<Pagination currentPage={2} changePage={jest.fn()} />);
  //Should expect correct page number that it has been passed
  const pageElement = screen.getByTestId(/pagenumber/i);
  expect(pageElement).toHaveTextContent('2 / 9')
});
