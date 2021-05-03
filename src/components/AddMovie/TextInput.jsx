import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { title, handleValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input-title">
        Título
        <input
          type="text"
          id="input-title"
          value={ title }
          data-testid="title-input"
          onChange={ handleValue }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

export default TextInput;
