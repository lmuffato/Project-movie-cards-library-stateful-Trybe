import React from 'react';

class MovieImage extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="image-input"
          type="text"
          // value={ imagePath }
          data-testid="image-input"
          // onChange={ onClick }
        />
      </label>
    );
  }
}

export default MovieImage;
