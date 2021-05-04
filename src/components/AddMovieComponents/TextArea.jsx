import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { handInputs, value } = this.props;
    return (
      <div>
        <label
          htmlFor="TextArea"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="TextArea"
            name="storyline"
            type="text"
            onChange={ handInputs }
            value={ value }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  handInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
