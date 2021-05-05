import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { onSearchTextChange, value } = this.props;
    return (
      <div>
        <label
          htmlFor="textInput"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            id="textInput"
            name="searchText"
            type="text"
            onChange={ onSearchTextChange }
            value={ value }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
