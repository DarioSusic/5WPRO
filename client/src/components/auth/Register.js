import React, { Fragment } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <FontAwesomeIcon icon='spinner' fixedWidth />
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <Form>
        <Form.Group controlId='formGridName'>
          <Form.Label>Name and Surname</Form.Label>
          <Form.Control placeholder='Enter your name and surname' />
        </Form.Group>

        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default Register;
