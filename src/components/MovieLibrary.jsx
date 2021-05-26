import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    this.setState((prevState) => ({ movies: [...prevState.movies, state] }));
  }

  searchedTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  selectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  bookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchedTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }),
}.isRequired;

export default MovieLibrary;
