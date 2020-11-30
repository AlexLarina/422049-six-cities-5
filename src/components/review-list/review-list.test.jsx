import React from "react";
import renderer from "react-test-renderer";
import {ReviewList} from "./review-list.jsx";

it(`Render ReviewList`, () => {
  const tree = renderer
    .create(
        <ReviewList
          reviewList={[]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
