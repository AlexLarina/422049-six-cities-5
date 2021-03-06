import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen.jsx";
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

const mockStore = configureStore()({
  DATA: {
    offerNeighboorsList: [],
    offerCommentsList: [],
  },
  PROCESS: {
    activeOfferId: ``
  },
  USER: {
    authorizationStatus: ``,
    userData: {}
  }
});

jest.mock(`../map/map`, () => `Map`);

it(`Render OfferScreen`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <OfferScreen
              offer={offer}
              offerNeighboorsList={[]}
              authorizationStatus={``}
              userData={{}}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
