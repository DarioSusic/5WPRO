import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const AppNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link to='/products' exact as={NavLink}>
          Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/profiles' exact as={NavLink}>
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/dashboard' exact as={NavLink}>
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={logout} to='#!' exact as={NavLink}>
          Logout
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/cart' exact as={NavLink}>
          <FontAwesomeIcon className='fa-lg' icon={faShoppingCart} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link to='/contact' exact as={NavLink}>
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/register' exact as={NavLink}>
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/login' exact as={NavLink}>
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to='/cart' exact as={NavLink}>
          <FontAwesomeIcon className='fa-lg' icon={faShoppingCart} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand to='/' exact as={NavLink}>
        <img
          alt=''
          src='#'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        5WPro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLink : guestLinks}</Fragment>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(AppNavbar);
