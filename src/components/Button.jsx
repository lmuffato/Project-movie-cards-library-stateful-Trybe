import React, { Component } from 'react';
import { func } from 'prop-types';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: func.isRequired,
};

export default Button;
