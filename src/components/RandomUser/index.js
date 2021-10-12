import React from 'react';
import PropTypes from 'prop-types';

import { Content, Image, Info } from './RandomUser.styles';

const RandomUsers = ({ user }) => (
  <Content>
    <Image src={user.avatar} alt="user avatar" />
    <Info>
      <div>
        `
        {user.first_name}
        {' '}
        +
        {user.last_name}
        `
      </div>
      <div>{user.employment.title}</div>
      <div>{user.employment.key_skill}</div>
    </Info>
  </Content>
);

RandomUsers.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    employment: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key_skill: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RandomUsers;
