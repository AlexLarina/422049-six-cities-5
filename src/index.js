import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {creatOfferDataArray} from "./mocks/offers.js";

const OFFERS_AMOUNT = 4;
const offerData = creatOfferDataArray(OFFERS_AMOUNT);

const Settings = {
  RENT_AMOUNT: 312
};

ReactDOM.render(
    <App
      rentItemsAmount = {Settings.RENT_AMOUNT}
      offerList={offerData}
    />,
    document.querySelector(`#root`)
);
