import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputText from './InputText';
import Select from './Select';
import TextArea from './TextArea';

// Codado via pair programming com Vinicius Rodrigues
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

    this.saveMovie = this.saveMovie.bind(this);
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
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
        <InputText
          id="subtitle-input"
          type="text"
          text="Subtítulo"
          value={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
        <InputText
          id="image-input"
          type="text"
          text="Imagem"
          value={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
        <TextArea
          id="storyline-input"
          text="Sinopse"
          value={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
        <InputText
          id="rating-input"
          type="number"
          text="Avaliação"
          value={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
        <Select
          id="genre-input"
          text="Gênero"
          value={ genre }
          onChange={ (event) => this.setState({ genre: event.target.value }) }
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
