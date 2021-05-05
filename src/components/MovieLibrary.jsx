// implement AddMovie component here
import React from 'react';
import Proptypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState(({
      searchText: value,
    }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState(({
      bookmarkedOnly: checked,
    }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState(({
      selectedGenre: value,
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSearchTextChange={ this.onSearchTextChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>

    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieLibrary;
