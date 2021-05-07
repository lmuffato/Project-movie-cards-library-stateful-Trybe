import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends Component {
  render() {
    const { handleValue, subtitle } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitulo"
      >
        Subtítulo
        <input
          name="subtitle"
          onChange={ handleValue }
          data-testid="subtitle-input"
          value={ subtitle }
          id="subtitulo"
          type="text"
        />
      </label>);
  }
}

Subtitulo.propTypes = {
  handleValue: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Subtitulo;
