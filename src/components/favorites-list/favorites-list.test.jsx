import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const offer = {
  id: 0,
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0,
  bedrooms: 0,
  maxGuests: 0,
  owner: {
    name: ``
  },
  household: [],
  images: [],
  neighbors: [],
  coordinates: [],
  description: ``
};

const mockStore = configureStore()({
  DATA: {
    favoriteOfferList: []
  }
});

it(`Render FavoritesList`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <FavoritesList
              offer={offer}
              favoriteOfferList={[]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
