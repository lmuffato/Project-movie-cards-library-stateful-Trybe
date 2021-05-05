import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { dataInput } = this.props;
    const { dataTestidLabel, nameLabel, typeInput, nameInput, dataTestid } = dataInput;
    const { handleChange, title } = this.props;

    return (
      <label htmlFor={ nameInput } data-testid={ dataTestidLabel }>
        {nameLabel }
        <select
          type={ typeInput }
          name={ nameInput }
          data-testid={ dataTestid }
          value={ title }
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

SelectInput.propTypes = {
  dataInput: PropTypes.objectOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SelectInput;
