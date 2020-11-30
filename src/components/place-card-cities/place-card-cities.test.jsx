import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardCities from "./place-card-cities.jsx";
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

it(`Render PlaceCardCities`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <PlaceCardCities
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
