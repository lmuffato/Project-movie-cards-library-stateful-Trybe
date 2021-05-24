import { React } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="preenche-form"
        >
          Título
          <input
            id="preenche-form"
            data-testid="title-input"
            name="title"
            type="text"
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
TitleInput.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default TitleInput;
