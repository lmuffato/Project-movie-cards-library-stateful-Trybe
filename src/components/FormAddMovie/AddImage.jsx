import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          value={ value }
          onChange={ callback }
          id="image-input"
          name="imagePath"
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  value: PropTypes.string,
  callback: PropTypes.func,
}.isRequered;

export default AddImage;
