import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore()({
  PROCESS: {
    cityCoordinates: []
  }
});


// jest.mock(`./map`, () => `Map`);

it(`Render Map`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <Map
              coordinates={[]}
              cityCoordinates={[52.37454, 4.897976]}
              activeOfferCoordinates={[52.37454, 4.897976]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
