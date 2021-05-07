import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: 'movies',
  //   };
  // }

  addMovie= () => {
    console.log('adicionei um filme');
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};
export default MovieLibrary;
