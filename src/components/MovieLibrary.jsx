import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  filterText = (string) => {
    const { movies } = this.props;
    const strLow = string.toLowerCase();
    const title = movies.filter((movie) => (
      movie.title.toLowerCase().includes(strLow)));
    const subtitle = movies.filter((movie) => (
      movie.subtitle.toLowerCase().includes(strLow)));
    const story = movies.filter((movie) => (
      movie.storyline.toLowerCase().includes(strLow)));
    if (string.length > 0) {
      subtitle.forEach((movie) => {
        title.push(movie);
      });
      story.forEach((movie) => {
        title.push(movie);
      });
      const final = [...new Set(title)]; // https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/ metodo descobert nesse site
      this.setState({
        movies: final,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  changeText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
    this.filterText(event.target.value);
  }

  // filterBookmark = () => {
  //   const { movies } = this.props;
  //   const { bookmarkedOnly } = this.state;
  //   if (bookmarkedOnly === true) {
  //     this.setState({
  //       movies: movies.filter((movie) => movie.bookmarked === true),
  //     });
  //   } else {
  //     this.setState({
  //       movies,
  //     });
  //   }
  // }

  changeBookmark = () => {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      this.setState({
        bookmarkedOnly: false,
        movies,
      });
    } else {
      this.setState({
        bookmarkedOnly: true,
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    }
  }

  filterGender = (string) => {
    const { movies } = this.props;
    if (string !== '') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === string),
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  changeGender = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
    this.filterGender(event.target.value);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeBookmark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeGender }
        />
        <MovieList movies={ movies } />
        <AddMovie onCLick="callback" />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
