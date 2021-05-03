import React from 'react';
import PropTypes from 'prop-types';
import SelectMovie from './SelectMovie';

export default class FormMovie extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            defaultChecked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

        <SelectMovie
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

FormMovie.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
