import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, handleText } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          name="imagePath"
          value={ imagePath }
          onChange={ handleText }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
};

export default Imagem;
