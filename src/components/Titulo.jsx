import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titulo extends Component {
  render() {
    const { handleValue, title } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="titulo"
      >
        Título
        <input
          name="title"
          onChange={ handleValue }
          data-testid="title-input"
          value={ title }
          id="titulo"
          type="text"
        />
      </label>);
  }
}

Titulo.propTypes = {
  handleValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Titulo;
