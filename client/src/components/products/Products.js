import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Users</h1>
          <p className='lead'>
            <i className='fas fa-users'></i> Browse users
          </p>
          <div className='profiles'>
            {products.length > 0 ? (
              products.map(product => (
                <ProductItem key={product._id} product={product} />
              ))
            ) : (
              <h4>No products found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProducts })(Products);
