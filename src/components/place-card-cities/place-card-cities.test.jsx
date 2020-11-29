import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardCities from "./place-card-cities.jsx";

const offer = {
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0
};

it(`Render PlaceCardCities`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PlaceCardCities
            onHover={() => {}}
            id={``}
            className={``}
            offer={offer}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
