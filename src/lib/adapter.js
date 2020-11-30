import {extend} from "./util.js";

// city: {name: "Cologne", location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}}
// host: {id: 25, name: "Angelina", is_pro: true, avatar_url: "img/avatar-angelina.jpg"}
// images: ["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg",…]
// is_favorite: false

export const getLocationCoordinates = (location) => [location.latitude, location.longitude];

export const adaptToClient = (offer) => {
  return extend(offer, {
    photo: offer.preview_image,
    premium: offer.is_premium,
    maxGuests: offer.max_adults,
    cost: offer.price,
    household: offer.goods,
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
