import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, dataTestid, onClick } = this.props;
    return (
      <div>
        <button
          className="buttons"
          data-testid={ dataTestid }
          type="button"
          onClick={ onClick }
        >
          {text}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  dataTestid: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
