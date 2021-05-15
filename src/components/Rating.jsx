import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label
        className="movie-card-rating"
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação:
        <input
          className="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
          type="number"
          name="rating"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
