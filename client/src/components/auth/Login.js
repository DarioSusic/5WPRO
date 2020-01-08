import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log('Success');
    //login(email, password);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Login to your Account
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            placeholder='Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default Login;
