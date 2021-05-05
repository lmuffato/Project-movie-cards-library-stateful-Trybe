import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './LabelInput';
import LabelTextArea from './LabelTextArea';
import LabelSelect from './LabelSelect';
import Button from './Button';

class AddMovie extends React.Component {
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
  }

  trocaTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      title: value,
    }));
  }

  trocaSubTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      subtitle: value,
    }));
  }

  trocaImage = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      imagePath: value,
    }));
  }

  trocaStoryline = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      storyline: value,
    }));
  }

  trocaRating = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      rating: value,
    }));
  }

  trocaGenre = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      genre: value,
    }));
  }

  funcBtn = () => {
    const { onClick } = this.props;
    onClick(this.props);
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
      <form data-testid="add-movie-form">
        <LabelInput
          value={ title }
          id="title-input"
          type="text"
          text="Título"
          onChange={ this.trocaTitle }
        />
        <LabelInput
          id="subtitle-input"
          text="Subtítulo"
          type="text"
          onChange={ this.trocaSubTitle }
          value={ subtitle }
        />
        <LabelInput
          id="image-input"
          text="Imagem"
          type="text"
          onChange={ this.trocaImage }
          value={ imagePath }
        />
        <LabelTextArea
          id="storyline-input"
          text="Sinopse"
          onChange={ this.trocaStoryline }
          value={ storyline }
        />
        <LabelInput
          id="rating-input"
          text="Avaliação"
          type="number"
          onChange={ this.trocaRating }
          value={ rating }
        />
        <LabelSelect
          id="genre-input"
          text="Gênero"
          onChange={ this.trocaGenre }
          value={ genre }
        />
        <Button onClick={ this.funcBtn } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
