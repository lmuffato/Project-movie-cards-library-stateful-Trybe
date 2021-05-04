// implement AddMovie component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });

    const filtredMovies = this.state.movies.filter(movie =>
      movie.title.includes(target.value) ||
      movie.subtitle.includes(target.value) ||
      movie.storyline.includes(target.value));

    this.setState({ movies: filtredMovies });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });

    if (target.checked) {
      const filtredMovies = this.state.movies.filter(movie =>
        movie.bookmarked === true)
      this.setState({ movies: filtredMovies });
    } else {
      this.setState({ movies: this.props.movies });
    }
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });

    const filtredMovies = this.state.movies.filter(movie =>
      movie.genre === target.value);

    this.setState({ movies: filtredMovies });
  }

  onClick(newMovie) {
    this.setState((oldMovieList) => ({
      movies: [...oldMovieList.movies, newMovie]}));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange} />

        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieLibrary;
