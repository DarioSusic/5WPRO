import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//TODO edit 404
const ErrorPage = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <h1 className='large text-primary'>Oops!</h1>
        </Row>
        <Row>
          <h2>404 - The Page cannot be found</h2>
        </Row>
        <Row>
          <Nav.Link to='/' exact as={NavLink}>
            Go to Homepage
          </Nav.Link>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ErrorPage;
