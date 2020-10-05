import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {

  const {rentItemsAmount} = props;

  return (
    <MainScreen rentItemsAmount={rentItemsAmount} />
  );
};

App.propTypes = {
  rentItemsAmount: PropTypes.number.isRequired,
};

export default App;
