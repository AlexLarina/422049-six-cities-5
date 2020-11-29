import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

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

const userData = {
  email: ``
};

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          offerList={[offer]}
          activeOfferId={``}
          userData={userData}
          openOffer={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
