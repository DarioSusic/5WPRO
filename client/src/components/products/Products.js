import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';

import { CardColumns, Form, FormControl, Button, Row } from 'react-bootstrap';

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
          <Row>
            <h1 className='large text-primary'>Products</h1>
            <Form className='ml-auto' inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Row>
          <CardColumns>
            {products.length > 0 ? (
              products.map(product => (
                <ProductItem key={product._id} product={product} />
              ))
            ) : (
              <h4>No products found...</h4>
            )}
          </CardColumns>
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
