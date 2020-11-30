import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import {PrivateRoute} from "./private-route.jsx";

it(`Render PrivateRoute`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PrivateRoute
            authorizationStatus={``}
            exact={true}
            path={``}
            render={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
