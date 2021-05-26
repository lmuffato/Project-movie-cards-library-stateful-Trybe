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
      movies,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    this.setState((prevState) => ({ movies: [...prevState.movies, state] }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar />
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
