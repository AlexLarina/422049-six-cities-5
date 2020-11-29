import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import {OfferListCities} from "./offer-list-cities.jsx";

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

it(`Render OfferListCities`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <OfferListCities
            offerList={[offer]}
            handleActiveOffer={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
