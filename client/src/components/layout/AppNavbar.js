import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { Navbar, Nav } from 'react-bootstrap';

export const AppNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link href='/profiles'>Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={logout} href='#!'>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link href='/contact'>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/register'>Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/cart'>Shopping Cart</Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
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
