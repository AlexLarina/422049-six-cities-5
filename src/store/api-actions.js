import {loadOffers, requireAuthorization, redirectToRoute, loadUserData, loadOfferComments} from "./action.js";
import {AuthorizationStatus} from "../lib/const.js";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)))
);

// @TO-DO в душе неясно, зачем это вот вообще делать, когда все данные приходят в hotels,
// а комментарии добавляются и загружаются отдельно
export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then((data) => data)
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadOfferComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(loadUserData(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
