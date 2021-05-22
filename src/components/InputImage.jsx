import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { onChangeAM } = this.props;
    onChangeAM(value, name);
  }

  render() {
    const { imagePath } = this.props;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </div>

    );
  }
}

InputImage.propTypes = {
  onChangeAM: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default InputImage;
