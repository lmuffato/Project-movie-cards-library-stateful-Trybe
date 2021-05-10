import React from 'react';
import PropTypes from 'prop-types';

class ImgMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="input-img" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ item }
          onChange={ callback }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImgMovie.propTypes = {
  item: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ImgMovie;
