import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput2 extends Component {
  render() {
    const { handInputs, value } = this.props;
    return (
      <div>
        <label
          htmlFor="textInput"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            id="textInput"
            name="subtitle"
            type="text"
            onChange={ handInputs }
            value={ value }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

TextInput2.propTypes = {
  handInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput2;