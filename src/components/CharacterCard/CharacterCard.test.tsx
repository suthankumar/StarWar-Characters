import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import CharacterCard from ".";
import { BrowserRouter as Router } from "react-router-dom";

import { oneStarWarCharacter } from "../../shared/mockData";

const fn = jest.fn();

const renderComponent = (homepg: boolean = true, favCharacters: any = []) => {
  return render(
    <Router>
      <CharacterCard
        key={1}
        d={oneStarWarCharacter}
        addCharacter={fn}
        homepage={homepg}
        updateData={fn}
        favCharacters={favCharacters}
      />
    </Router>
  );
};

test("Should render CharacterCard with same props passed", async () => {
  renderComponent();
  const titleElement = screen.getByText(/Luke Skywalker/i);
  expect(titleElement).toBeInTheDocument();
});

describe("Must Show the correct icon for each different page", () => {
  test("Should render with Heart Icon for the homepage", async () => {
    renderComponent();
    //expect Heart icon to be displayed
    expect(screen.queryByTestId(/heartIcon/)).toBeInTheDocument();
    expect(screen.queryByTestId(/binIcon/)).not.toBeInTheDocument();

    //await screen.findByText(/Tatooine/)
    //screen.debug()
    //expect(screen.queryByText(/Tatooine/)).toBeInTheDocument();
  });

  test("Should render with bin Icon for the Favorite page", async () => {
    renderComponent(false);
    //expect Bin icon to be displayed
    expect(screen.queryByTestId(/binIcon/)).toBeInTheDocument();
    expect(screen.queryByTestId(/heartIcon/)).not.toBeInTheDocument();
  });
});

describe("StarWar character Favourite Status", () => {
  test("Should not highlight the item if selected StarWar character not in the favourite list", async () => {
    renderComponent();
    const iconElement = screen.queryByTestId(/heartIcon/);
    //expect icon to be just outline as the current item not in the favourite list
    expect(iconElement).toHaveAttribute("fill", "none");
  });

  test("Should highlight if selected StarWar character in the favourite list", async () => {
    renderComponent(true, [oneStarWarCharacter]);
    const iconElement = screen.queryByTestId(/heartIcon/);
    //expect icon to be filled as the current item is in the favourite list
    expect(iconElement).toHaveAttribute("fill", "currentColor");
  });
});
