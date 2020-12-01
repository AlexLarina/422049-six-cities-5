import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
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
  description: ``,
  city: {
    name: ``,
    location: {
      latitude: 0,
      longitude: 0,
    }
  }
};

const userData = {
  email: ``
};

const mockStore = configureStore()({
  DATA: {
    offerList: []
  },
  PROCESS: {
    activeOfferId: 0
  },
  USER: {
    userData: {}
  }
});

jest.mock(`../map/map`, () => `Map`);

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <App
              offerList={[offer]}
              activeOfferId={0}
              userData={userData}
              openOffer={() => {}}
              openFavorites={() => {}}
              city={``}
              authorizationStatus={``}
              cityCoordinates={[]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
