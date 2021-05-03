import React, { Component } from 'react';

class ImagePath extends Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleInputs }
        />
      </label>
    );
  }
}

export default ImagePath;
