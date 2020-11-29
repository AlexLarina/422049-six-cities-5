import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 0,
  user: {
    [`avatar_url`]: ``,
    id: 0,
    [`is_pro`]: false,
    name: ``
  },
  rating: 0,
  comment: ``,
  date: ``
};

it(`Render Review`, () => {
  const tree = renderer
    .create(
        <Review
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
