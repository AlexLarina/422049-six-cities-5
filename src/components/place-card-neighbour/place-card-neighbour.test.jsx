import React from "react";
import {MemoryRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import PlaceCardNeighbour from "./place-card-neighbour.jsx";

const offer = {
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0
};

it(`Render PlaceCardNeighbour`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PlaceCardNeighbour
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
