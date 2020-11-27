import React from "react";
import PropTypes from "prop-types";

const ButtonChangeFilmStatus = ({isAddToMyList, onChangeFilmStatus}) => {

  return (
    <button
      onClick={onChangeFilmStatus}
      className="btn btn--list movie-card__button"
      type="button"
    >
      {(!isAddToMyList) && <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"/>
      </svg>}

      {(isAddToMyList) && <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"/>
      </svg>}

      <span>My list</span>
    </button>
  );
};

ButtonChangeFilmStatus.propTypes = {
  isAddToMyList: PropTypes.bool.isRequired,
  onChangeFilmStatus: PropTypes.func.isRequired
};

export default ButtonChangeFilmStatus;
