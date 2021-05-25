// implement AddMovie component here
// Inicio do projeto jlfagundes
import React from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {

  //   }
  // }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList movies={ this.props.movies } /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
