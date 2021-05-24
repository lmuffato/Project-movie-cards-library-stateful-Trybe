import { React } from 'react';
import PropTypes from 'prop-types';

class AvaliatorInput extends Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating"
        >
          Avaliação
          <input
            id="rating"
            data-testid="rating-input"
            type="number"
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
AvaliatorInput.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AvaliatorInput;
