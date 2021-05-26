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
      movieList: movies,
    };
  }

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  addMovieFunc = (newMovie) => {
    const { movieList } = this.state;
    this.setState({
      movieList: [...movieList, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChanges }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChanges }
        />
        <MovieList movies={ movieList } />
        <AddMovie onClick={ this.addMovieFunc } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
