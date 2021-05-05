import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { handInputs, value } = this.props;

    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input-label"
            name="title"
            data-testid="title-input"
            onChange={ handInputs }
            value={ value }
          />
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  handInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
