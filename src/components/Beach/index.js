import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Image, Content, Wrapper } from './Beach.styles';
import Rating from '../Rating';

const Beach = ({ beach }) => (
  <Wrapper>
    <Link to={`/beach/${beach.id}`}>
      <Image src={`${beach.image}?id=${beach.id}`} alt="Nature image" />
      <Content>
        <h1>{beach.name}</h1>
        <p>
          { beach.country }
          ,
          {' '}
          { beach.city }
        </p>
        <Rating value={beach.rating} />
        <i className="material-icons fav">favorite_border</i>
      </Content>
    </Link>
  </Wrapper>
);

Beach.propTypes = {
  beach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default Beach;
