import {ActionCreator} from "./action.js";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);
