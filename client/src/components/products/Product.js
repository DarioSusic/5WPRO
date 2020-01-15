import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProductById } from '../../actions/product';

const Product = ({ getProductById, product: { product, loading }, match }) => {
  useEffect(() => {
    getProductById(match.params.id);
  }, []);
  return (
    <Fragment>
      {product === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <p>{product}</p>
        </Fragment>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  getProductById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProductById })(Product);
