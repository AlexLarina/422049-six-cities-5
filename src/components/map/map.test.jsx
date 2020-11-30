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
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <Map
              coordinates={[]}
              activeOfferCoordinates={[]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
