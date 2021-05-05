import React from 'react';
import Proptypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const { imagePath, handleOnChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="newImg">
        Imagem
        <input
          value={ imagePath }
          data-testid="image-input"
          name="imagePath"
          id="newImg"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

InputImg.propTypes = {
  imagePath: Proptypes.string.isRequired,
  handleOnChange: Proptypes.func.isRequired,
};

export default InputImg;
