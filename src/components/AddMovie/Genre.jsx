import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            id="select-input"
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ AddMovie }
          >
            <option data-testid="genre-option" checked value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default Genre;
