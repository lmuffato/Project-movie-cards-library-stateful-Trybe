import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput3 extends Component {
  render() {
    const { handInputs, value } = this.props;
    return (
      <div>
        <label
          htmlFor="textInput3"
          data-testid="image-input-label"
        >
          Imagem
          <input
            id="textInput3"
            name="imagePath"
            type="text"
            onChange={ handInputs }
            value={ value }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

TextInput3.propTypes = {
  handInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput3;
