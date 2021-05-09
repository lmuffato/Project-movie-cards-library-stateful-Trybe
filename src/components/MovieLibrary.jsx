// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }

  test = () => {
    console.log('asda');
  }

  render() {
    const { movies } = this.state;
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          // onSearchTextChange="callback"
          bookmarkedOnly={ bookmarkedOnly }
          // onBookmarkedChange="callback"
          selectedGenre={ selectedGenre }
          // onSelectedGenreChange="uma callback"
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.test } />
      </div>
    );
  }
}

export default MovieLibrary;
