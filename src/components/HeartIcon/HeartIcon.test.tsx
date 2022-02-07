import { render, screen } from "@testing-library/react";
import HeartIcon from ".";

//Mock Data
import { oneStarWarCharacter } from "../../shared/mockData";

const fn = jest.fn();

describe("Favourite Icon Status", () => {
  test("Should not highlight the item if selected StarWar character not in the favourite list", async () => {
    render(<HeartIcon addCharacter={fn} favCharacters={[]} />);
    const iconElement = screen.queryByTestId(/heartIcon/);
    //expect icon to be just outline as the current item not in the favourite list
    expect(iconElement).toHaveAttribute("fill", "none");
  });

  test("Should highlight if selected StarWar character in the favourite list", async () => {
    render(
      <HeartIcon
        item={oneStarWarCharacter}
        addCharacter={fn}
        favCharacters={[oneStarWarCharacter]}
      />
    );
    const iconElement = screen.queryByTestId(/heartIcon/);
    //expect icon to be filled as the current item is in the favourite list
    expect(iconElement).toHaveAttribute("fill", "currentColor");
  });
});
