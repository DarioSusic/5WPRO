import React from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const DashboardActions = () => {
  return (
    <Button
      className='margin-right'
      href='/edit-profile'
      variant='outline-primary'
    >
      <FontAwesomeIcon className='fa-sm' icon={faUserEdit} /> Edit Profile
    </Button>
  );
};

export default DashboardActions;
