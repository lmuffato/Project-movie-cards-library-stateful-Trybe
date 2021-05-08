import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image-input"
          datatestid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.defaultProps = {
  value: '',
  onChange: '',
};

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default ImagePath;
