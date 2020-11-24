import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../consts";


const PrivateRoute = ({render, path, authorizationStatus}) => {
  return (
    <Route exact path={path} render={(routeProps) => {
      return (
        authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />
      );
    }}/>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
