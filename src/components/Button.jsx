import React from 'react';

class Button extends React.Component {
  render() {
    const { text, dataTestid, onClick } = this.props;
    return (
      <button
        data-testid={ dataTestid }
        type="button"
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

export default Button;
