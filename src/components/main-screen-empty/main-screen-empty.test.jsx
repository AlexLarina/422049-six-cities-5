import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {MainEmpty} from "./main-screen-empty.jsx";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore()({
  PROCESS: {
    city: ``
  },
  DATA: {
    cityList: []
  },
  USER: {
    authorizationStatus: ``,
    userData: {}
  }
});

it(`Render MainEmpty`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <MainEmpty
              city={``}
              authorizationStatus={``}
              userData={{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
