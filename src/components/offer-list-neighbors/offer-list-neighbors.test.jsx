import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import OfferListNeighbors from "./offer-list-neighbors.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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
  reviews: [],
  neighbors: [],
  coordinates: [],
  description: ``
};

const mockStore = configureStore()({
  DATA: {
    offerList: []
  }
});

it(`Render OfferListNeighbors`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <OfferListNeighbors
              offerList={[]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
