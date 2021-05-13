import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleFilter = () => {
    this.setState((previousValue) => {
      const { bookmarkedOnly } = previousValue;
      const { movies } = this.props;
      let filteredMovies = [];
      if (bookmarkedOnly) {
        filteredMovies = movies.filter((movie) => (
          movie.bookmarked));
        return {
          movies: filteredMovies,
        };
      }

      return {
        movies,
      };
    });

    // this.setState((previousValue) => {
    //   const { movies, searchText } = previousValue;
    //   const filteredMovies = movies.filter((movie) => (
    //     movie.title.toLowerCase().includes(searchText.toLowerCase())));
    //   return {
    //     movies: filteredMovies,
    //   };
    // });

    this.setState((previousValue) => {
      const { movies, searchText, selectedGenre } = previousValue;
      const filteredMovies = movies.filter((movie) => {
        const final = 3;
        const arrayOfValues = Object.values(movie).slice(0, final);
        return arrayOfValues.find((value) => (
          value.toString().includes(searchText) && movie.genre.includes(selectedGenre)
        ));
      });
      return {
        movies: filteredMovies,
      };
    });
  }

  // handleFilter = () => {
  //   this.setState((previousValue) => {
  //     const { bookmarkedOnly, searchText } = previousValue;
  //     const { movies } = this.props;
  //     if (bookmarkedOnly) {
  //       const filteredMovies = movies.filter((movie) => (
  //         movie.title.toLowerCase().includes(searchText.toLowerCase())));
  //       return {
  //         movies: filteredMovies,
  //       };
  //     }
  //     return {
  //       movies,
  //     };
  //   });
  // }

  handleChange = ({ target }) => {
    const { id: name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.handleFilter();
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(Object).isRequired,
};

export default MovieLibrary;
