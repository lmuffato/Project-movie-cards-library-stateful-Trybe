import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ value }
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Imagem;
