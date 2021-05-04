import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { defaultState, onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ (event) => {
          onClick();
          event.preventDefault();
          defaultState();
        } }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  defaultState: PropTypes.objectOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
