import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, handle, state } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          onClick(state);
          handle();
        } }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Button;
