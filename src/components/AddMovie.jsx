import React from 'react';
import PropTypes from 'prop-types';
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
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
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

        <button
          type="button"
          onClick={ this.resetState }
          data-testid="send-button"
        >
          Adicionar filme
        </button>

      </section>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequire;
