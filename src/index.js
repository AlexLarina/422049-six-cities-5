import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENT_AMOUNT: 312
};

ReactDOM.render(
    <App
      rentItemsAmount = {Settings.RENT_AMOUNT}
    />,
    document.querySelector(`#root`)
);
