import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idImage" data-testid="image-input-label">
        Imagem
        <input
          id="idImage"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputImage;
