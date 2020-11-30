import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen.jsx";

it(`Render LoginScreen`, () => {
  const tree = renderer
    .create(
        <LoginScreen
          onSubmit={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
