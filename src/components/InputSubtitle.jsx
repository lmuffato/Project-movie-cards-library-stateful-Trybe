import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle"
      >
        Subtitulo:
        <input
          value={ subtitle }
          data-testid="subtitle-input"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
