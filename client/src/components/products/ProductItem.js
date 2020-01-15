import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductItem = ({
  product: { _id, title, image, description, pricing }
}) => {
  let productImage;
  if (!image) {
    productImage = 'http://design-ec.com/d/e_others_50/l_e_others_500.png';
  } else {
    productImage = image;
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='mw-100' variant='top' src={`${productImage}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Price: {pricing.price}</ListGroupItem>
        <ListGroupItem>Discount: {pricing.discount}%</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='primary' type='button' block>
          View
        </Button>
        <Button variant='outline-success' type='button' block>
          Edit
        </Button>
        <Button variant='danger' type='button' block>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
