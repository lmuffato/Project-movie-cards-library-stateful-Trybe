import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;
