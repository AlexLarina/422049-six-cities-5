import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import OfferListNeighbors from "./offer-list-neighbors.jsx";

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

it(`Render OfferListNeighbors`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <OfferListNeighbors
            offerList={[offer]}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
