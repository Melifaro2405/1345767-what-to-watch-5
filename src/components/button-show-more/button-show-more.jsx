import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeShownFilms} from "../../store/action";

const ButtonShowMore = ({countShownFilms, changeShownFilmsAction}) => {
  return (
    <div className="catalog__more">
      <button onClick={() => changeShownFilmsAction(countShownFilms)}
        className="catalog__button"
        type="button">
          Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  countShownFilms: PropTypes.number.isRequired,
  changeShownFilmsAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP_STATE}) => ({
  countShownFilms: APP_STATE.countShownFilms
});

const mapDispatchToProps = (dispatch) => ({
  changeShownFilmsAction(countShownFilms) {
    dispatch(changeShownFilms(countShownFilms));
  }
});

export {ButtonShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

