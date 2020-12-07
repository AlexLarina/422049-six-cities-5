import {
  loadOffers,
  requireAuthorization,
  redirectToRoute,
  loadUserData,
  loadOfferComments,
  loadOfferNeighboors,
  loadFavoriteOffers
} from "./action.js";
import {AuthorizationStatus} from "../lib/const.js";
import {adaptOfferListToClient} from "../lib/adapter.js";

// @TO-DO где надлежит адаптер применять ?
export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(adaptOfferListToClient(data))))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadOfferNeighboors(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);

export const addOfferToFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
);

export const fetchOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadOfferComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(data));
    })
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const submitNewComment = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
);
