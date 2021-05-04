import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="input-rating">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  value: 'undefined',
};

export default Rating;
