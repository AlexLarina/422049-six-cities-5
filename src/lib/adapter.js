import {extend} from "./util.js";

export const getLocationCoordinates = (location) => [location.latitude, location.longitude];

export const adaptToClient = (offer) => {
  return extend(offer, {
    photo: offer.preview_image,
    premium: offer.is_premium,
    maxGuests: offer.max_adults,
    cost: offer.price,
    household: offer.goods,
    isFavorite: offer.is_favorite,
    owner: {
      name: offer.host.name,
      avatar: offer.host.avatar_url,
      super: offer.host.is_pro
    },
    coordinates: getLocationCoordinates(offer.location),
    neighbors: [],
    reviews: []
  });
};
