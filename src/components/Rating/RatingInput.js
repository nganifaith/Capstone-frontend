import PropTypes from 'prop-types';
import RatingWrapper from './Rating.styles';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ value, onChange }) => (
  <RatingWrapper input>
    {stars.map((i) => (
      <i
        key={i}
        className={`material-icons ${value >= i ? 'Active' : ''}`}
        onClick={() => onChange(i)}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        star
      </i>
    ))}
  </RatingWrapper>
);

export default Rating;
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
