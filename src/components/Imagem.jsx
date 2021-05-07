import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Imagem extends Component {
  render() {
    const { handleValue, imagePath } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="imagem"
      >
        Imagem
        <input
          name="imagePath"
          onChange={ handleValue }
          data-testid="image-input"
          value={ imagePath }
          id="imagem"
          type="text"
        />
      </label>);
  }
}

Imagem.propTypes = {
  handleValue: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Imagem;
