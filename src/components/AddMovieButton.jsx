import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { resetStates } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ resetStates }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  resetStates: PropTypes.func.isRequired,
};

export default Button;
