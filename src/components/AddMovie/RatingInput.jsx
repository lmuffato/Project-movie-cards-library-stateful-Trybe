import React from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends React.Component {
  render() {
    const { rating, handleRating } = this.props;
    return (
      <label htmlFor="rate" data-testid="rating-input-label">
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

RatingInput.defaultProps = {
  rating: 0,
  handleRating: () => {},
};

RatingInput.propTypes = {
  rating: PropTypes.number,
  handleRating: PropTypes.func,
};
