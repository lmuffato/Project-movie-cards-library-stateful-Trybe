import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
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

export default Button;
