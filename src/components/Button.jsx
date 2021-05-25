import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { addFilme } = props;
  return (
    <button
      type="submit"
      data-testid="send-button"
      onClick={ addFilme }
    >
      Adicionar filme
    </button>
  );
}

Button.propTypes = {
  addFilme: PropTypes.func,
}.isRequired;

export default Button;
