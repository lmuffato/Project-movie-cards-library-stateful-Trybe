import React from 'react';
import PropTypes from 'prop-types';

class InputImagem extends React.Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="imagem-form"
        >
          Imagem
          <input
            id="imagem-form"
            data-testid="subtitle-input"
            type="text"
            name="imagePath"
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
InputImagem.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputImagem;
