import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Home from '.';
import TestRenderer from 'react-test-renderer';

import {MainContext} from '../../context/MainContext';

const fn = jest.fn()
const contextValues = { data:{result:[
  {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/people/1/"
  }
]}, currentPage:1, setCurtPage:fn, addCharacter:fn };


afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const renderConnexion = () => {
  return render(
      <MainContext.Provider
          value={contextValues}
        >
              <Home />
       </MainContext.Provider>
     );
};

it('calls dispatchUser when mouseD', async() => {
  // When
  const component = renderConnexion();
   await component.findByText('Shows Result');
    expect(component.queryByText(/Shows Result/)).toBeInTheDocument();
  //fireEvent.mouseDown(component.getByTestId("deconnexion"));

  // Then
  //expect(mockedUserDispatch).toHaveBeenCalled();
});

// test('Renders initial data from starship API', async() => {
//   const fn = jest.fn()
//   //render(<Home />);
  

// const element = new TestRenderer.create(
//   <MainContext.Provider value={contextValues}>
//       <Home />
//   </MainContext.Provider>
// );
//   // jest.spyOn(React, 'useContext')
//   //   .mockImplementation(() => contextValues);
 
//  // render(element)
//  expect(element.root.findByType("div").children).toEqual(['Provided Value']);
//  // await screen.findByText('Shows Result');
//   //expect(screen.queryByText(/Shows Result/)).toBeInTheDocument();
//   //screen.debug();
// });








// test('renders Helloworld', () => {
//   render(<Home />);
//   //screen.debug();
//   const titleElement = screen.getByText(/Clear/i);
//   expect(titleElement).toBeInTheDocument();
// });

// test('Should render input element', async() => {
//   render(<Home />); 
//   const inputElement = screen.getByPlaceholderText(/Search here/);
//   expect(inputElement).toBeInTheDocument();
// });

// test('Should be able type in input', async() => {
//   render(<Home />); 
//   const inputElement: any = screen.getByPlaceholderText(/Search here/);
//   fireEvent.change(inputElement, {target: {value:"Owen"}})
//   expect(inputElement.value).toBe("Owen");
//   screen.debug();
// });


