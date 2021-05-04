import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, changeValue } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          onChange={ changeValue }
          value={ imagePath }
          data-testid="image-input"
          name="imagePath"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Imagem;
