import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {COUNT_SHOWN_FILMS} from "../../consts";

const ButtonShowMore = ({countShownFilms, changeCountFilms}) => {
  return (
    <div className="catalog__more">
      <button onClick={(evt) => {
        evt.preventDefault();
        changeCountFilms(countShownFilms);
      }} className="catalog__button" type="button">Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  countShownFilms: PropTypes.number.isRequired,
  changeCountFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({countShownFilms}) => ({countShownFilms});

const mapDispatchToProps = (dispatch) => ({
  changeCountFilms(countShownFilms) {
    dispatch(ActionCreator.changeCountFilms(countShownFilms + COUNT_SHOWN_FILMS));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

