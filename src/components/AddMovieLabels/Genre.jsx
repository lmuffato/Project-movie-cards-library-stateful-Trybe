import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select
          name="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        Gênero
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
