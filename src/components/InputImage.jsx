import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImage extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
        type="text"
      >
        <input
          id="image"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
