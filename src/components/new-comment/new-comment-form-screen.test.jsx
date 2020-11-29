import React from "react";
import renderer from "react-test-renderer";
import {NewCommentFormScreen} from "./new-comment-form-screen.jsx";

it(`Render NewCommentFormScreen`, () => {
  const tree = renderer
    .create(
        <NewCommentFormScreen
          onCommentSubmit={() => {}}
          offerId={0}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
