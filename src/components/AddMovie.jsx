import React from 'react';
// import PropTypes from 'prop-types';
import TitleMovieC from './AddMovieComponents.jsx/Title-MovieC';
import SubtitleMovieC from './AddMovieComponents.jsx/Subtitle-MovieC';
import ImagePathMovieC from './AddMovieComponents.jsx/ImageP-MovieC';
import StorylineMovieC from './AddMovieComponents.jsx/Storyline-MovieC';
import RatingMovieC from './AddMovieComponents.jsx/Rating-MovieC';
import GenreMovieC from './AddMovieComponents.jsx/Genre-MovieC';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value });
  }

  addNewMovie() {
    // minha função de adicionar o filme a lista
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <h2>Adicione um novo filme!</h2>
        <form data-testid="add-movie-form">
          <TitleMovieC
            title={ title }
            handleChange={ this.handleChange }
          />
          <SubtitleMovieC
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
          <ImagePathMovieC
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <StorylineMovieC
            storyline={ storyline }
            handleChange={ this.handleChange }
          />
          <RatingMovieC
            rating={ rating }
            handleChange={ this.handleChange }
          />
          <GenreMovieC
            genre={ genre }
            handleChange={ this.handleChange }
          />

        </form>

        <button type="button" onClick={ this.addNewMovie }> Adicionar filme </button>

      </section>
    );
  }
}

/* AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imagePath: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}; */
export default AddMovie;
