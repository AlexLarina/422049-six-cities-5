import React from "react";
import renderer from "react-test-renderer";
import FavoritesScreen from "./favorites-screen.jsx";

it(`Render FavoritesScreen`, () => {
  const tree = renderer
    .create(
        <FavoritesScreen/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
