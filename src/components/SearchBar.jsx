import React from 'react';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';
// import PropTypes from 'prop-types';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <InputText
            onSearchTextChange={ onSearchTextChange }
            searchText={ searchText }
          />
          <InputCheckbox
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />
          <InputSelect
            onSelectedGenreChange={ onSelectedGenreChange }
            selectedGenre={ selectedGenre }
          />
        </form>
      </div>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   // onSearchTextChange: , // callback
//   bookmarkedChange: PropTypes.bool, // boolean
//   // selectedGenre: PropTypes.string ,  // string
//   onSelectedGenreChange: PropTypes.callback, // callback
// }

export default SearchBar;
