import {appData} from "./app-data.js";
import {ActionType} from "../../action.js";

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
    offerCommentsList: [],
    offerNeighboorsList: [],
    cityList: [],
    favoriteOfferList: []
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
