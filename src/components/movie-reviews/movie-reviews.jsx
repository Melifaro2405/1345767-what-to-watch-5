import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {reviewProptypes} from "../../props-validation";
import ReviewsList from "../reviews-list/reviews-list";
import {connect} from "react-redux";
import {fetchReviews} from "../../serviсes/api-actions";

class MovieReviews extends PureComponent {

  componentDidMount() {
    const {loadReviews, id} = this.props;
    loadReviews(id);
  }

  componentDidUpdate(prevProps) {
    const {loadReviews, id} = this.props;
    if (id !== prevProps.id) {
      loadReviews(id);
    }
  }

  render() {
    const {reviews} = this.props;
    const evenReviews = reviews.filter((_, index) => index % 2 !== 0);
    const oddReviews = reviews.filter((_, index) => index % 2 === 0);

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          <ReviewsList reviews={oddReviews}/>
        </div>
        <div className="movie-card__reviews-col">
          <ReviewsList reviews={evenReviews}/>
        </div>
      </div>
    );
  }
}

MovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired,
  loadReviews: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.comments
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(fetchReviews(id));
  }
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
