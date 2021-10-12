import PropTypes from 'prop-types';
import RatingWrapper from './Rating.styles';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ value }) => (
  <RatingWrapper>
    {stars.map((i) => (
      <i key={i} className={`material-icons ${value >= i ? 'Active' : ''}`}>star</i>
    ))}
  </RatingWrapper>
);

export default Rating;
Rating.propTypes = {
  value: PropTypes.number.isRequired,
};
