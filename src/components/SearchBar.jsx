// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

// const searchProps = {
//   searchText,
//   onSearchTextChange,
//   bookmarkedOnly,
//   onBookmarkedChange,
//   selectedGenre,
//   onSelectedGenreChange,
// };

class SearchBar extends React.Component {
  render() {
    const { searchProps } = this.props;
    return (
      <select className="filtros" { ...searchProps } />
    );
  }
}

// Esse componente renderizará uma barra com filtros acima da listagem de cartões.
// Quais cartões serão mostrados no componente <MovieList /> dependerá dos filtros escolhidos.
// <SearchBar /> deve receber como props:

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback

SearchBar.propTypes = {
  searchProps: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
