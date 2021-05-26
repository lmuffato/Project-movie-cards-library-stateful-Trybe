import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="imagem-form"
        >
          Imagem
          <input
            id="imagem-form"
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
ImageInput.propTypes = {
  value: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ImageInput;
