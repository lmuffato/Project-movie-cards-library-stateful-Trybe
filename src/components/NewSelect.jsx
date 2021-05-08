import React from 'react';
import Proptypes from 'prop-types';

class NewSelect extends React.Component {
  fillInDataLabel(nameOfInput) {
    return `${nameOfInput}-input-label`;
  }

  fillInDataSelect(nameOfInput) {
    return `${nameOfInput}-input`;
  }

  render() {
    const { name, value, handleChange, description } = this.props;

    return (
      <label data-testid={ this.fillInDataLabel(name) } htmlFor={ name }>
        { description }
        <select
          name={ name }
          id={ name }
          data-testid={ this.fillInDataSelect(name) }
          value={ value }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

NewSelect.propTypes = {
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  description: Proptypes.string.isRequired,
};

export default NewSelect;
