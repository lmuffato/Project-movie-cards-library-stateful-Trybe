import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="Imagem">
        Imagem:
        <input
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
          id="Imagemw"
        />
      </label>
    );
  }
}

Imagem.defaultProps = {
  value: '',
  onChange: '',
};

Imagem.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Imagem;
