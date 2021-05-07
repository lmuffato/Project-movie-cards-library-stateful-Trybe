import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleRating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleRating }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleRating: PropTypes.func.isRequired,
};

export default Rating;
