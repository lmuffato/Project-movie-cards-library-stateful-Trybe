import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSelect extends Component {
  render() {
    const { id, value, onChange, text } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { text }
        <select
          id={ id }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

LabelSelect.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  onCHangeChange: PropTypes.func,
}.isRequired;

export default LabelSelect;
