import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovie/TextInput';
import SubtitleInput from './AddMovie/SubtitleInput';
import ImageInput from './AddMovie/ImageInput';
import StorylineInput from './AddMovie/StorylineInput';
import RatingInput from './AddMovie/RatingInput';
import GenreSelect from './AddMovie/GenderSelect';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleValue = this.handleValue.bind(this);
    this.handleSubValue = this.handleSubValue.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleStory = this.handleStory.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.addMovieToLibrary = this.addMovieToLibrary.bind(this);
  }

  handleValue(event) {
    this.setState({ title: event.target.value });
  }

  handleSubValue(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleStory(event) {
    this.setState({ storyline: event.target.value });
  }

  handleRating(event) {
    this.setState({ rating: event.target.value });
  }

  handleGenre(event) {
    this.setState({ genre: event.target.value });
  }

  addMovieToLibrary() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form-addMovie">
        <TextInput title={ title } handleValue={ this.handleValue } />
        <SubtitleInput subtitle={ subtitle } handleSubValue={ this.handleSubValue } />
        <ImageInput imagePath={ imagePath } handleImage={ this.handleImage } />
        <StorylineInput storyline={ storyline } handleStory={ this.handleStory } />
        <RatingInput rating={ rating } handleRating={ this.handleRating } />
        <GenreSelect genre={ genre } handleGenre={ this.handleGenre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovieToLibrary }
          className="btn btn-primary"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// Referências para a função AddMovieToLibrary:
// ---> PR do colega João Nascimento
// https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/57/files
// --> Esta thread no slack: https://trybecourse.slack.com/archives/C01L16B9XC7/p1620082728499900
