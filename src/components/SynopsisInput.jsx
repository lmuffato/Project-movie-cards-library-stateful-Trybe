import { React } from 'react';
import PropTypes from 'prop-types';

class SynopsisInput extends Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
SynopsisInput.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SynopsisInput;
