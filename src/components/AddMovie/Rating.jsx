import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            name="rating"
            onChange={ AddMovie }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default Rating;
