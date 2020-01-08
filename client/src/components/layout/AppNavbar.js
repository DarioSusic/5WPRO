import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const AppNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
