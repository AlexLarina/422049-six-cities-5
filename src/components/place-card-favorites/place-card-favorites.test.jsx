import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardFavorites from "./place-card-favorites.jsx";
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

it(`Render PlaceCardFavorites`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <PlaceCardFavorites
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
