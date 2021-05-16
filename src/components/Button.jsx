import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { btnFunction } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ btnFunction }
        type="submit"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  btnFunction: PropTypes.func,
}.isRequired;

export default Button;
