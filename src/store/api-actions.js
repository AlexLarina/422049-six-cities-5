import {loadOffers} from "./action.js";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)))
);
