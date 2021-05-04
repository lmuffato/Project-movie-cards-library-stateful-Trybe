import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idStoryline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="idStoryline"
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputStoryline;
