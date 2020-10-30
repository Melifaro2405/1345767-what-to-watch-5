import React from "react";
import PropTypes from "prop-types";

export const ActorsList = ({actors}) => {
  return (
    <ul style={{listStyleType: `none`, padding: 0, margin: 0}}>
      {actors.map((actor, i) =>
        <li key={`${i}-${actor}`}>
          {actor},
        </li>)}
    </ul>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string).isRequired
};
