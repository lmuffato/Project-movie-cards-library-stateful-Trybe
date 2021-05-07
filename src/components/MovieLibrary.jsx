import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  onAddMovieClick = async (newMovieData) => {
    const { movies } = this.state;
    movies.push(newMovieData);
    await this.setState({ movies });
  }

  textMatch = (str, substr) => str.toLowerCase().includes(substr.toLowerCase());

  filteredMovies = () => {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let renderedMovieList = movies;

    if (searchText !== '') {
      renderedMovieList = renderedMovieList.filter((mov) => {
        let hasMatch = false;
        ['title', 'subtitle', 'storyline'].forEach((t) => {
          if (this.textMatch(mov[t], searchText)) hasMatch = true;
        });

        return hasMatch;
      });
    }

    if (bookmarkedOnly) {
      renderedMovieList = renderedMovieList.filter((mov) => mov.bookmarked);
    }

    if (selectedGenre !== '') {
      renderedMovieList = renderedMovieList.filter((mov) => mov.genre === selectedGenre);
    }

    return renderedMovieList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onAddMovieClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
