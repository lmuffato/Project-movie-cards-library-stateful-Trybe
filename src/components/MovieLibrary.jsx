import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      currMovies: props.movies,
    };
  }

  onSearchTextChange = (event) => {
    const { name, value } = event.target;
    const { movies } = this.props;

    this.setState({
      [name]: value,
      currMovies: movies.filter(({ title, subtitle, storyline }) => title
        .toLowerCase().includes(value.toLowerCase())
        || subtitle.toLowerCase().includes(value.toLowerCase())
        || storyline.toLowerCase().includes(value.toLowerCase())),
    });
  };

  onBookmarkedChange = () => {
    const { movies } = this.props;

    this.setState(({ bookmarkedOnly }) => ({
      bookmarkedOnly: !bookmarkedOnly,
    }));
    this.setState(({ bookmarkedOnly }) => ({
      currMovies: bookmarkedOnly ? movies.filter(({ bookmarked }) => bookmarked) : movies,
    }));
  };

  onSelectedGenreChange = (event) => {
    const { value } = event.target;
    const { movies } = this.props;
    this.setState({
      currMovies: value === '' ? movies : movies.filter(({ genre }) => genre === value),
    });
  };

  handleSubmit = (data) => {
    const { title, subtitle, imagePath, storyline, rating, genre } = data;
    const { movies } = this.props;

    movies.push({
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    });

    this.setState({
      currMovies: movies,
    });
  };

  render() {
    const { movies } = this.props;
    const {
      currMovies,
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ currMovies }
          bookmark={ this.bookmark }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <AddMovie
          onClick={ this.handleSubmit }
          movies={ movies }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
