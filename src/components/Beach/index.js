import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Image, Content } from './Beach.styles';

const Beach = ({ beach }) => (
  <Link to={`/beach/${beach.id}`}>
    <Image src={`${beach.image}?id=${beach.id}`} alt="Nature image" />
    <Content>
      <h1>{beach.name}</h1>
      {beach.country ? <h3>{beach.country}</h3> : ''}
      {beach.city ? <h3>{beach.city}</h3> : ''}
    </Content>
  </Link>
);

Beach.propTypes = {
  beach: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
};

export default Beach;
