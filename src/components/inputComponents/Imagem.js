import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="m-input" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Imagem;
