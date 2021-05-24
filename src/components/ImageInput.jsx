import { React } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
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
ImageInput.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ImageInput;
