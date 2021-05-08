import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    const { movies } = this.props;
    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
  }

  onClick(addMovieState) {
    this.setState((prevState) => ({ movies: [...prevState.movies, addMovieState] }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
