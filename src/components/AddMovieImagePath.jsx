import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagePath, handleInputs } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default ImagePath;
