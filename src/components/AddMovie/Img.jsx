import React from 'react';
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    const { imagePath, handleimg } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleimg }
        />
      </label>
    );
  }
}

Img.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleimg: PropTypes.func.isRequired,
};

export default Img;
