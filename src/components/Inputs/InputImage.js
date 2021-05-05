import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { handleAddMovie, imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="Imagem">
        Imagem
        <input
          onChange={ handleAddMovie }
          data-testid="image-input"
          value={ imagePath }
          type="text"
          name="imagePath"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  handleAddMovie: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
export default InputImage;
