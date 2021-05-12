import React from 'react';
import PropTypes from 'prop-types';

export default function Botao(props) {
  const { handleClick } = props;
  return (
    <button type="button" data-testid="send-button" onClick={ handleClick }>
      Adicionar filme
    </button>
  );
}

Botao.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
