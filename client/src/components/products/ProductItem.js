import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ product: { _id, title } }) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>{title}</h2>
        <Link to={`/product/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
