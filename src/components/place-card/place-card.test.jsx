import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardScreen from "./place-card.jsx";

const offer = {
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0
};

it(`Render PlaceCardScreen`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PlaceCardScreen
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
