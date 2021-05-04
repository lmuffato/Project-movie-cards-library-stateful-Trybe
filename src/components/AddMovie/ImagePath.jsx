import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="imagePath-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath-input"
            data-testid="image-input"
            value={ imagePath }
            name="imagePath"
            onChange={ AddMovie }
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default ImagePath;
