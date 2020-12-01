import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore()({
  USER: {
    userData: {},
    authorizationStatus: ``
  }
});

it(`Render FavoritesScreen`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <Header
              userData={{}}
              authorizationStatus={``}
              onSignInClick={() => {}}
              onAuthUserClick={() => {}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
