import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort.jsx";

it(`Render Sort`, () => {
  const tree = renderer
    .create(
        <Sort
          handleSortClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
