import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idRating" data-testid="rating-input-label">
        Avaliação
        <input
          id="idRating"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputRating;
