import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';

export const AppNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        5WPro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link to='#home'>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='#register'>Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='#login'>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='#cart'>Shopping Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
