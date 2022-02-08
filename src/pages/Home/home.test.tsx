import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Home from ".";
import { BrowserRouter as Router } from "react-router-dom";

import { intialData } from "../../shared/mockData";
import { MainContext } from "../../context/MainContext";

const fn = jest.fn();
const contextValues = {
  data: intialData,
  currentPage: 1,
  setCurtPage: fn,
  addCharacter: fn,
  favCharacters: [],
  setData: fn,
  setfavCharacters: fn,
};

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const renderComp = () => {
  return render(
    <MainContext.Provider value={contextValues}>
      <Router>
        <Home />
      </Router>
    </MainContext.Provider>
  );
};

describe("StarWar character intial list", () => {
  test("Should render StarWar characters", async () => {
    // When
    const { getByText, findByText } = renderComp();
    expect(getByText(/Clear/i)).toBeInTheDocument();
    await findByText(/Luke Skywalker/); //first Starwat character name
    expect(getByText(/Luke Skywalker/)).toBeInTheDocument();
  });

  test("Should render expected number of StarWar characters initialy", async () => {
    // When
    const { findAllByTestId } = renderComp();
    const itemElement = await findAllByTestId(/SwCharacter/);
    expect(itemElement.length).toBe(10);
  });
});

describe("Search for StarWar character", () => {
  test("renders Homepage", () => {
    render(<Home />);
    //screen.debug();
    const titleElement = screen.getByText(/Clear/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Should render input element", async () => {
    render(<Home />);
    const inputElement = screen.getByPlaceholderText(/Search here/);
    expect(inputElement).toBeInTheDocument();
  });

  test("Should be able to type in input and expect specfic star character on the page", async () => {
    const { findAllByTestId, getByPlaceholderText, findByText } = renderComp();
    let itemElement = await findAllByTestId(/SwCharacter/); //10 items here intialy

    //Then search for 'Owen' on Search bar
    const inputElement: any = getByPlaceholderText(/Search here/);
    fireEvent.change(inputElement, { target: { value: "Owen" } });
    expect(inputElement.value).toBe("Owen");

    //Then check if Owen was displayed on the page
    itemElement = await findAllByTestId(/SwCharacter/);
    expect(await findByText(/Owen Lars/)).toBeInTheDocument(); //
    expect(itemElement.length).toBe(1); // 1 starwar character should be listed
  });
});
