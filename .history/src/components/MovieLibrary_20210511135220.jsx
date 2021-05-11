import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    console.log(this.props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { id } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [id]: value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((movie) => {
      if (searchText.toLowerCase()) {
        return movie.subtitle.toLowerCase().includes(searchText)
          || movie.storyline.toLowerCase().includes(searchText)
          || movie.title.toLowerCase().includes(searchText);
      }
      if (bookmarkedOnly) {
        return movie.bookmarked;
      }
      if (selectedGenre) {
        return movie.genre === selectedGenre;
      }
      return movies;
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
