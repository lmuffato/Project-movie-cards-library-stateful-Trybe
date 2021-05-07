import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: 'world',
    };
  }

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
      <form
        data-testid="search-bar-form"
        className="form-search-bar"
      >
        <SearchBarInput
          type={ 'text' }
          value={ searchText }
          eventHandle={ onSearchTextChange }
          labelText={"Inclui o texto"}
        />
        <br></br>
        <SearchBarInput
          type={ 'checkbox' }
          value={ bookmarkedOnly }
          eventHandle={ onBookmarkedChange }
          labelText={"Mostrar somente favoritos"}
        />
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

// observe os padrões dos requesitos 2 a 4 e o req 5
// para tentar fazer compounds

export default SearchBar;
