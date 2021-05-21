import React from 'react';
import PropTypes from 'prop-types';
import AddMovieExtends from './AddMovieExtends';
// import MovieCard from './MovieCard';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

handleOnChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
  console.log(this.state);
}

// addMovie = () => {
//   const { movies } = this.props;
//   movies.push(this.state);
//   // moviesAll.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
// }

initialState = () => {
  this.setState({
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  });
}

render() {
  const { onClick } = this.props;
  const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
  return (
    <form data-testid="add-movie-form">
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleOnChange }
        />
      </label>
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleOnChange }
        />
      </label>
      <AddMovieExtends
        imagePath={ imagePath }
        storyline={ storyline }
        rating={ rating }
        genre={ genre }
        handleOnChange={ this.handleOnChange }
      />
      <button
        type="submit"
        data-testid="send-button"
        onClick={ () => {
          onClick();
          // this.addMovie();
          this.initialState();
        } }
      >
        Adicionar filme
      </button>
    </form>
  );
}
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  // movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
