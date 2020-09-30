import React from "react";
import Main from "../main/main";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, year} = props;

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
    />
  );
};

export default App;
