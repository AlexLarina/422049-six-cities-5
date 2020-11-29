import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen.jsx";

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

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(
        <MainScreen
          rentItemsAmount={0}
          offerList={[offer]}
          city={``}
          activeOfferId={``}
          authorizationStatus={``}
          onSignInClick={() => {}}
          userData={userData}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
