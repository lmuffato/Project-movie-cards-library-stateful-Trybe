import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    const state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'all',
      movies,
    };

    this.state = state;
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.cheked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeLibrary }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeLibrary }
          movies={ movies }
        />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
