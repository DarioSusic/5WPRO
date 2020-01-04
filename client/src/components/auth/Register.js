import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId='formGridName'>
          <Form.Label>Name and Surname</Form.Label>
          <Form.Control
            value={name}
            name='name'
            onChange={e => onChange(e)}
            type='text'
            placeholder='Enter your name and surname'
          />
        </Form.Group>

        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            name='email'
            onChange={e => onChange(e)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            name='password'
            onChange={e => onChange(e)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={password2}
            name='password2'
            onChange={e => onChange(e)}
            type='password'
            placeholder='Confirm Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default Register;
