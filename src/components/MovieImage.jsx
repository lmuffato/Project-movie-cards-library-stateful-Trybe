import React from 'react';
import PropTypes from 'prop-types';

class MovieImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="movieImage">
        Imagem
        <input
          data-testid="image-input"
          id="movieImage"
          value={ imagePath }
          type="text"
          name="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

MovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieImage;
