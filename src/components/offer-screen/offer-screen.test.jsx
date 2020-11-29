import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen.jsx";

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

it(`Render OfferScreen`, () => {
  const tree = renderer
    .create(
        <OfferScreen
          offer={offer}
          authorizationStatus={``}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
