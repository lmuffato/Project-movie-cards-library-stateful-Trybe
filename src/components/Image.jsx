import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          defaultValue={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default Image;
