import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="text-area" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="text-area"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
