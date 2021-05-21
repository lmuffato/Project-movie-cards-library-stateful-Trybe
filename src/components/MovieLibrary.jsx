import React, { Component } from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleMovieButton = (event) => {
  //   console.log(event);
  //   console.log(this.state);
  //   this.setState({
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   });
  // }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        {/* <SearchBar />
        // <MovieList movies={this.props.movies} /> */}
        {/* // <AddMovie handleMovieButton={ this.handleMovieButton } /> */}
      </div>
    );
  }
}

export default MovieLibrary;
