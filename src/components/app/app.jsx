import React from "react";
import Main from "../main/main";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;

  return (
    <Main errorsCount={errorsCount} />
  );
};

export default App;
