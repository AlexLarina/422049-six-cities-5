import React from "react";
import renderer from "react-test-renderer";
import FavoritesScreenEmpty from "./favorites-screen-empty.jsx";

it(`Render FavoritesScreenEmpty`, () => {
  const tree = renderer
    .create(
        <FavoritesScreenEmpty />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
