import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore()({
  USER: {
    userData: {},
    authorizationStatus: ``
  }
});

it(`Render LoginScreen`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <LoginScreen
              onSubmit={() => {}}
              authorizationStatus={``}
              userData={{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
