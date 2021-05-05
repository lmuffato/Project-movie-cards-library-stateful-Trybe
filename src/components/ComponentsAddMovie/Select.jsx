import React from 'react';
import Proptypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { genre, handleOnChange } = this.props;
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="select"
          onChange={ handleOnChange }
          value={ genre }
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  genre: Proptypes.string.isRequired,
  handleOnChange: Proptypes.func.isRequired,
};

export default Select;
