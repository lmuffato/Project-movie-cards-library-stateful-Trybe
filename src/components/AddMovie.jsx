import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelTextArea from './LabelTextArea';
import Button from './Button';

class AddMovie extends Component {
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
  }

  newStateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  newStateSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  newStateImagePath = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  newStateStoryline = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  newStateRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  newStateGenre = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  funcButton = () => {
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
      <form data-testid="add-movie-form">
        <LabelInput
          id="title-input"
          value={ title }
          onChange={ this.newStateTitle }
          text="Título"
          type="text"
        />
        <LabelInput
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.newStateSubtitle }
          text="Subtítulo"
          type="text"
        />
        <LabelInput
          id="image-input"
          value={ imagePath }
          onChange={ this.newStateImagePath }
          text="Imagem"
          type="text"
        />
        <LabelTextArea
          id="storyline-input"
          value={ storyline }
          onChange={ this.newStateStoryline }
          text="Sinopse"
        />
        <LabelSelect
          id="genre-input"
          value={ genre }
          onChange={ this.newStateGenre }
          text="Gênero"
        />
        <LabelInput
          id="rating-input"
          value={ rating }
          onChange={ this.newStateRating }
          text="Avaliação"
          type="number"
        />
        <Button onClick={ this.funcButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
