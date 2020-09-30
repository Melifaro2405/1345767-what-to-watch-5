import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = ({title, genre, year}) => {

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
    />
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
