import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const offer = {
  id: 0,
  premium: true,
  photo: ``,
  cost: 0,
  title: ``,
  type: ``,
  rating: 0,
  bedrooms: 0,
  maxGuests: 0,
  owner: {
    name: ``
  },
  household: [],
  images: [],
  reviews: [],
  neighbors: [],
  coordinates: [],
  description: ``
};

const userData = {
  email: ``
};

const mockStore = configureStore()({
  DATA: {
    cityList: []
  },
  PROCESS: {
    city: ``
  },
  USER: {
    userData: {},
    authorizationStatus: ``
  }
});

jest.mock(`../map/map`, () => `Map`);

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <MainScreen
              rentItemsAmount={0}
              offerList={[offer]}
              city={``}
              activeOfferId={``}
              authorizationStatus={``}
              onSignInClick={() => {}}
              onAuthUserClick={() => {}}
              cityCoordinates={[]}
              userData={userData}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
