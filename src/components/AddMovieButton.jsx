import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonEvent } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ buttonEvent }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  buttonEvent: PropTypes.func.isRequired,
};

export default Button;
