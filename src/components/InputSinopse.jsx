import React from 'react';
import PropTypes from 'prop-types';

class InputSinopse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
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
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
InputSinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputSinopse;
