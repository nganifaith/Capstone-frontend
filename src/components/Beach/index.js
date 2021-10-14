import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  Image, Content, Wrapper, HeartIcon,
} from './Beach.styles';
import Rating from '../Rating';

const Beach = ({ beach, toggleFav }) => (
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
        <HeartIcon className="material-icons" active={beach.isFav} onClick={toggleFav}>{beach.isFav ? 'favorite' : 'favorite_border'}</HeartIcon>
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
    isFav: PropTypes.bool,
  }).isRequired,
  toggleFav: PropTypes.func.isRequired,
};

export default Beach;
