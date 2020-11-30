import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardNeighbour from "./place-card-neighbour.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const offer = {
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0
};

const mockStore = configureStore()({
  DATA: {
    cityList: []
  },
  PROCESS: {
    city: ``
  }
});

it(`Render PlaceCardNeighbour`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <PlaceCardNeighbour
              onHover={() => {}}
              id={``}
              className={``}
              offer={offer}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
