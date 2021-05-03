import React from 'react';
import PropTypes from 'prop-types';

function SelectInput(props) {
  const { value, onChange } = props;

  return (
    <label htmlFor="select-input" data-testid="select-input-label">
      Filtrar por gênero

      <select
        name="select-input"
        value={ value }
        onChange={ onChange }
        data-testid="select-input"
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
