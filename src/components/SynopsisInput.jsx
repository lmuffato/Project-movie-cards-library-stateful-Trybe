import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SynopsisInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
SynopsisInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SynopsisInput;
