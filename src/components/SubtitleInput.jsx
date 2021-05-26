import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { value, handleChange } = this.props;
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
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
SubtitleInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SubtitleInput;
