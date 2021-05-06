import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './AddMovie/TitleInput';
import SubitleInput from './AddMovie/SubtitleInput';
import ImagePathInput from './AddMovie/ImagePathInput';
import StorylineInput from './AddMovie/StorylineInput';
import RatingInput from './AddMovie/RatingInput';
import GenreInput from './AddMovie/GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = initialState;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  sendMovieAndResetState = () => {
    const { onClick } = this.props;
    console.log(onClick);
    console.log('callback invocada');
    onClick(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { title } = this.state;
    const { subtitle } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;
    const { rating } = this.state;
    const { genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput
          initialStateValue={ title }
          stateHandler={ this.handleChange }
        />
        <SubitleInput
          initialStateValue={ subtitle }
          stateHandler={ this.handleChange }
        />
        <ImagePathInput
          initialStateValue={ imagePath }
          stateHandler={ this.handleChange }
        />
        <StorylineInput
          initialStateValue={ storyline }
          stateHandler={ this.handleChange }
        />
        <RatingInput
          initialStateValue={ rating }
          stateHandler={ this.handleChange }
        />
        <GenreInput
          initialStateValue={ genre }
          stateHandler={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.sendMovieAndResetState }
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

export default AddMovie;
