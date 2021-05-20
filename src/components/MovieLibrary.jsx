import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
// implement AddMovie component here

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleSubmit(state) {
    console.log('entrou');
    const { movies } = this.props;
    movies.push({
      title: state.title,
      subtitle: state.subtitle,
      imagePath: state.imagePath,
      rating: state.rating,
      genre: state.genre });
  }

  handelChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handelChecked = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handelSelect = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  filterMovies = () => {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.props;

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre.includes(selectedGenre));
    }
    if (searchText !== '') {
      return movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    return movies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handelChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handelChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handelSelect }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.handleSubmit } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  // searchText: PropTypes.string.isRequired,
  // onSearchTextChange: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // onBookmarkedChange: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.string.isRequired,
};

export default MovieLibrary;
