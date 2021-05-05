import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="newMovieImage" data-testid="image-input-label">
        Imagem
        <input
          id="newMovieImage"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
