import React from 'react';

class ImageInput extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="imagePath"
          id="image-input"
          data-testid="image-input"

        />
      </label>
    );
  }
}

export default ImageInput;
