import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovie/form/inputs/InputTitle';
import InputSubtitle from './AddMovie/form/inputs/InputSubtitle';
import InputImage from './AddMovie/form/inputs/InputImage';
import InputStoryLine from './AddMovie/form/inputs/InputStoryLine';
import RatingInput from './AddMovie/form/inputs/RatingInput';
import InputGenre from './AddMovie/form/inputs/InputGenre';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChange({ target }) {
    const { id, value } = target;
    if (id === 'rating') this.setState(({ [id]: Number(value) }));
    else this.setState({ [id]: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle
          value={ title }
          onChange={ this.onChange }
        />

        <InputSubtitle
          value={ subtitle }
          onChange={ this.onChange }
        />

        <InputImage
          value={ imagePath }
          onChange={ this.onChange }
        />

        <InputStoryLine
          value={ storyline }
          onChange={ this.onChange }
        />

        <RatingInput
          value={ rating }
          onChange={ this.onChange }
        />

        <InputGenre
          value={ genre }
          onChange={ this.onChange }
        />

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
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
