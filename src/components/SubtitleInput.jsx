import { React } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle-form"
        >
          Subtítulo
          <input
            id="subtitle-form"
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
SubtitleInput.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SubtitleInput;
