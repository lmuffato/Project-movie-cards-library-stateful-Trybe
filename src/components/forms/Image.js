import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
