import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Card } from 'react-bootstrap';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar, company }
  }
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='mw-100' variant='top' src={`${avatar}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{company}</Card.Text>
      </Card.Body>
      <Button
        to={`/profile/${_id}`}
        as={NavLink}
        variant='primary'
        type='button'
        block
      >
        View Profile
      </Button>
    </Card>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
