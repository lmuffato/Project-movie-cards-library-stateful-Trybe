import React from 'react';
import PropTypes from 'prop-types';

export default class GenreMovie extends React.Component {
  render() {
    const { item, callback } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre-select"
          value={ item }
          onChange={ callback }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreMovie.propTypes = {
  item: PropTypes.string,
  callback: PropTypes.func,
}.isRequired;
