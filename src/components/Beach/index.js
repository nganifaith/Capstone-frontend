import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  Image, Content, Wrapper, HeartIcon,
} from './Beach.styles';
import Rating from '../Rating';
import { getImage } from '../../reducers/beachDetails';

const Beach = ({ beach, toggleFav }) => (
  <Wrapper>
    <Link to={`/beach/${beach.id}`}>
      <Image src={getImage(beach)} alt="Nature image" />
      <Content>
        <h1>{beach.name}</h1>
        <p>
          { beach.country }
          ,
          {' '}
          { beach.city }
        </p>
        <Rating value={beach.rating} />
        <HeartIcon className="material-icons" active={beach.fav} onClick={toggleFav}>{beach.fav ? 'favorite' : 'favorite_border'}</HeartIcon>
      </Content>
    </Link>
  </Wrapper>
);

Beach.propTypes = {
  beach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    featured_image: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
    rating: PropTypes.number,
    fav: PropTypes.bool,
  }).isRequired,
  toggleFav: PropTypes.func.isRequired,
};

export default Beach;
