import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteProduct } from '../../actions/product';

const ProductItem = ({
	auth,
	deleteProduct,
	product: { _id, title, image, description, pricing },
}) => {
	let productImage;
	if (!image) {
		productImage = 'http://design-ec.com/d/e_others_50/l_e_others_500.png';
	} else {
		productImage = image;
	}

	return (
		<Fragment>
			<Card style={{ width: '18rem' }}>
				<Card.Img className="mw-100" variant="top" src={`${productImage}`} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Price: {pricing.price}</ListGroupItem>
					<ListGroupItem>Discount: {pricing.discount}%</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Button
						to={`/product/${_id}`}
						exact
						as={NavLink}
						variant="primary"
						type="button"
						block
					>
						View
					</Button>
					{/*TODO Figure what happens with state on reload and how to put super admin*/}
					{!auth.loading && auth.isAuthenticated && (
						<Button
							to={`/product/${_id}`}
							as={NavLink}
							variant="outline-success"
							type="button"
							block
						>
							Edit
						</Button>
					)}
					{!auth.loading && auth.isAuthenticated && (
						<Button
							value={_id}
							onClick={() => deleteProduct(_id)}
							variant="danger"
							type="button"
							block
						>
							Delete
						</Button>
					)}
				</Card.Body>
			</Card>
		</Fragment>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteProduct })(ProductItem);
