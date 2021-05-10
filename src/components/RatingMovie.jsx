import React from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="input-number" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ item }
          onChange={ callback }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingMovie.propTypes = {
  item: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default RatingMovie;
