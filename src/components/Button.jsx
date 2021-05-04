import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
//   onClick = (event) => {
//     event.preventDefault();
//     console.log('Olá!');
//   }

  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
