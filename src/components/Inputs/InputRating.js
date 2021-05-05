import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { handleAddMovie, rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="Avaliação">
        Avaliação
        <input
          onChange={ handleAddMovie }
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};
export default InputRating;
