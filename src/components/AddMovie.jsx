import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputText from './InputText';
import Select from './Select';
import TextArea from './TextArea';

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

    this.changeText = this.changeText.bind(this);
    this.addMovie = this.saveMovie.bind(this);
  }

  changeText(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  saveMovie() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          id="title-input"
          type="text"
          text="Título"
          value={ title }
          onChange={ this.changeText }
        />
        <InputText
          id="subtitle-input"
          type="text"
          text="Subtítulo"
          value={ subtitle }
          onChange={ this.changeText }
        />
        <InputText
          id="image-input"
          type="text"
          text="Imagem"
          value={ imagePath }
          onChange={ this.changeText }
        />
        <TextArea
          id="storyline-input"
          text="Sinopse"
          value={ storyline }
          onChange={ this.changeText }
        />
        <InputText
          id="rating-input"
          type="number"
          text="Avaliação"
          value={ rating }
          onChange={ this.changeText }
        />
        <Select
          id="genre-input"
          text="Gênero"
          value={ genre }
          onChange={ this.changeText }
        />
        <Button onClick={ this.saveMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
