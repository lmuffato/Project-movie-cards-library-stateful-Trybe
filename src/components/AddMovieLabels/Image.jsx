import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
        Imagem
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
