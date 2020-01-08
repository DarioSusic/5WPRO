import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { Alert } from 'react-bootstrap';

//TODO fix alert
const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Alert key={alert.id} variant={alert.alertType}>
      {alert.msg}
    </Alert>
  ));

Alerts.propTypes = {
  alerts: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);
