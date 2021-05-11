import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  render() {
    const { title, handleValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input-title">
        Título
        <input
          type="text"
          name={ title }
          id="input-title"
          value={ title }
          className="form-control"
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
