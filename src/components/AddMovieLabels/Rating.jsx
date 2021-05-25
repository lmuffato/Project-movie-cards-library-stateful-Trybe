import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          defaultValue="0"
          value={ value }
          onChange={ handleChange }
        />
        Avaliação
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
