import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./main-screen-empty.jsx";

it(`Render MainEmpty`, () => {
  const tree = renderer
    .create(
        <MainEmpty
          city={``}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
