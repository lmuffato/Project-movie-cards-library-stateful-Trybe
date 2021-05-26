import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, resetDefaultState, state } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ () => { resetDefaultState(onClick, state); } }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  resetDefaultState: PropTypes.func.isRequired,
  state: PropTypes.func.isRequired,
};

export default Button;
