import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../consts";

const UserBlock = ({authorizationStatus, login}) => {

  return (
    <div className="user-block">
      {(authorizationStatus === AuthorizationStatus.NO_AUTH) && (
        <Link to={AppRoute.LOGIN}
          className="user-block__link">Sign in
        </Link>
      )}
      {(authorizationStatus === AuthorizationStatus.AUTH) && (
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src={login.avatar} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      )}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.shape({
    avatar: PropTypes.string
  })
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  login: USER.login
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
