import React from "react";
import renderer from "react-test-renderer";
import {CityList} from "./city-list.jsx";

it(`Render CityList`, () => {
  const tree = renderer
    .create(
        <CityList
          city={``}
          handleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
