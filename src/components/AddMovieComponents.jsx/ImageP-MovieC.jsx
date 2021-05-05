import React from 'react';
import PropTypes from 'prop-types';

class ImagePathMovieC extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imageMovie">
        Imagem
        <input
          data-testid="image-input"
          id="imageMovie"
          value={ imagePath }
          type="text"
          name="imagePath"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePathMovieC.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePathMovieC;
