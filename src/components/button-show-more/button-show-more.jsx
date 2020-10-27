import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ButtonShowMore = ({countShownFilms, changeShownFilms}) => {
  return (
    <div className="catalog__more">
      <button onClick={() => changeShownFilms(countShownFilms)}
        className="catalog__button"
        type="button">
          Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  countShownFilms: PropTypes.number.isRequired,
  changeShownFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({countShownFilms}) => ({countShownFilms});

const mapDispatchToProps = (dispatch) => ({
  changeShownFilms(countShownFilms) {
    dispatch(ActionCreator.changeShownFilms(countShownFilms));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

