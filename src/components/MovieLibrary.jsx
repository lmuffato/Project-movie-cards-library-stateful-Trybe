import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      renderNewCard: false,
      newCards: [],
    };
  }

  createNewCardMovie = (movie) => {
    const { newCards } = this.state;
    newCards.push(movie);
    this.setState({ newCards, renderNewCard: true });
  }

  render() {
    const { movies } = this.props;
    const { renderNewCard, newCards } = this.state;
    return (
      <main>
        <nav>
          <SearchBar />
        </nav>
        <section>
          <MovieList movies={ movies } />
          { renderNewCard ? newCards
            .map((m) => <MovieCard key={ m.title } movie={ m } />) : console.log('?')}
        </section>
        <section>
          <AddMovie createNewCardMovie={ this.createNewCardMovie } />
        </section>
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  props: PropTypes.shape({
    movies: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default MovieLibrary;
