import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            value={ value }
            onChange={ onChange }
            id="rating"
            data-testid="rating-input"
            type="number"
          />
        </label>
        <br />
      </div>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default InputRating;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
