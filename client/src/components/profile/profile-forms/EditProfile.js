import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../../actions/profile';

import { Form, Button, Container } from 'react-bootstrap';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    website: '',
    bio: '',
    interests: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      bio: loading || !profile.bio ? '' : profile.bio,
      location: loading || !profile.location ? '' : profile.location,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    bio,
    location,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <Container className='mx-auto'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Let's get some information to make
          your profile stand out
        </p>
        <Form onSubmit={e => onSubmit(e)}>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              value={company}
              name='company'
              onChange={e => onChange(e)}
              type='text'
              placeholder='Your company name'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              value={website}
              name='website'
              onChange={e => onChange(e)}
              type='text'
              placeholder='Enter your website'
            />
            <Form.Text className='text-muted'>
              Could be your own or a company website
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={location}
              name='location'
              onChange={e => onChange(e)}
              type='text'
              placeholder='Enter your location'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              value={bio}
              name='bio'
              onChange={e => onChange(e)}
              type='text'
              as='textarea'
              rows='3'
              placeholder='A short bio of yourself'
            />
          </Form.Group>

          <Button
            variant='primary'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            value='Register'
          >
            Add Social Network Links
          </Button>
          <Form.Text className='text-muted'>Optional</Form.Text>

          {displaySocialInputs && (
            <Fragment>
              <Form.Group>
                <Form.Control
                  value={facebook}
                  name='facebook'
                  onChange={e => onChange(e)}
                  type='text'
                  placeholder='Facebook URL'
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  value={twitter}
                  name='twitter'
                  onChange={e => onChange(e)}
                  type='text'
                  placeholder='Twitter URL'
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  value={youtube}
                  name='youtube'
                  onChange={e => onChange(e)}
                  type='text'
                  placeholder='Youtube URL'
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  value={linkedin}
                  name='linkedin'
                  onChange={e => onChange(e)}
                  type='text'
                  placeholder='Linkedin URL'
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  value={instagram}
                  name='instagram'
                  onChange={e => onChange(e)}
                  type='text'
                  placeholder='Instagram URL'
                />
              </Form.Group>
            </Fragment>
          )}
          <Container className='mx-auto m-1'>
            <Form.Group>
              <Button variant='success' type='submit'>
                Submit
              </Button>
              <Button
                className='ml-1'
                variant='outline-primary'
                to='/dashboard'
                as={NavLink}
              >
                Go Back
              </Button>
            </Form.Group>
          </Container>
        </Form>
      </Container>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
