import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, auth: { user }, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user.isAdmin && !user.isSuperAdmin ? (
        <Redirect to='/login' exact as={NavLink} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
