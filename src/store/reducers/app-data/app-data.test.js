import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api.js";
import {appData} from "./app-data.js";
import {ActionType} from "../../action.js";
import {fetchOfferList} from "../../api-actions.js";

const api = createAPI(() => {});

const offerList = [{
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
  description: ``
}];

const offerCommentsList = [{
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
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appData(void 0, {})).toEqual({
    offerList: [],
    offerCommentsList: []
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(appData({
    offerList: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offerList,
  })).toEqual({
    offerList,
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(appData({
    offerCommentsList: [],
  }, {
    type: ActionType.LOAD_OFFER_COMMENTS,
    payload: offerCommentsList,
  })).toEqual({
    offerCommentsList,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  // @TO-DO надо ли проверять загрузку комментариев
});
