import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.func = this.func.bind(this);
    // this.state({
    //   movies: this.props.moviesList,
    // });
  }

  func(addMovie) {
    this.setState({
      movies: addMovie,
    });
  }

  // callBack() {
  //   let sum = 0;
  //   sum += 1;
  //   console.log(sum);
  // }

  render() {
    const { movies } = this.state;
    const { func } = this;
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        {/* <SearchBar
          searchText=""
          onSearchTextChange={ callBack }
          bookmarkedOnly={ false }
          onBookmarkedChange={ callBack }
          selectedGenre=""
          onSelectedGenreChange={ callBack }
        /> */}
        <MovieList movies={ movies } />
        <AddMovie onClick={ func } />
      </div>
    );
  }
}

export default MovieLibrary;

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
