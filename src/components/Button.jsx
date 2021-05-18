import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { handleMovieState } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ handleMovieState }
        className="button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleMovieState: PropTypes.func,
}.isRequired;
