import React from 'react';

class MovieImage extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default MovieImage;
