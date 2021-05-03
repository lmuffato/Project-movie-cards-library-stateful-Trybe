import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { changeTitle, title } = this.props;

    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          id="titleInput"
          name="title"
          data-testid="title-input"
          onChange={ changeTitle }
          value={ title }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextInput;
