import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Info from ".";

test("Should render Info component with same props that been passed", () => {
  render(<Info title={"Home World"} text={"Tatooine"} />);
  //Should expect Title that it has been passed
  const titleElement = screen.getByText(/Home World/i);
  expect(titleElement).toBeInTheDocument();
});
