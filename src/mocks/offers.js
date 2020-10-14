import {createRandomNumber, getRandomArrayElement, chooseRandomArrayItems} from "../lib/random.js";

const AccommodationType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const Rating = {
  MIN: 0,
  MAX: 5
};

const Bedrooms = {
  MIN: 1,
  MAX: 3
};

const Guests = {
  MIN: 1,
  MAX: 5
};

const Cost = {
  MIN: 100,
  MAX: 150
};

const ID = {
  MIN: 1,
  MAX: 4
};

const AvatarID = {
  MIN: 1,
  MAX: 3
};

const DESCRIPTION_TEMPLATE = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
  Sed sed nisi sed augue convallis suscipit in sed felis.
  Aliquam erat volutpat.
  Nunc fermentum tortor ac porta dapibus.
  In rutrum ac purus sit amet tempus.
`;

const DESCRIPTION_SENTENCE_AMOUNT = {
  MIN: 1,
  MAX: 5
};

const createDescription = (template) => chooseRandomArrayItems(
    template.split(`.`), createRandomNumber(DESCRIPTION_SENTENCE_AMOUNT.MIN, DESCRIPTION_SENTENCE_AMOUNT.MAX)
).join(``);

const HOUSEHOLD_ITEMS = [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Washing Mashine`, `Dishwasher`, `Bath Towels`];

const createOfferData = () => {
  return {
    id: createRandomNumber(ID.MIN, ID.MAX),
    photo: `apartment-0${createRandomNumber(AvatarID.MIN, AvatarID.MAX)}.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    description: createDescription(DESCRIPTION_TEMPLATE),
    premium: 1,
    type: AccommodationType[getRandomArrayElement(Object.keys(AccommodationType))],
    rating: createRandomNumber(Rating.MIN, Rating.MAX),
    bedrooms: createRandomNumber(Bedrooms.MIN, Bedrooms.MAX),
    maxGuests: createRandomNumber(Guests.MIN, Guests.MAX),
    cost: createRandomNumber(Cost.MIN, Cost.MAX),
    household: chooseRandomArrayItems(HOUSEHOLD_ITEMS, createRandomNumber(0, HOUSEHOLD_ITEMS.length)),
    owner: {
      name: `Alex`,
      avatar: `??`,
      super: 0
    }
  };
};

const creatOfferDataArray = (size) => [...(new Array(size)).keys()].map(() => createOfferData());

export {creatOfferDataArray};


