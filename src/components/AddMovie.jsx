import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import Avaliation from './Avaliation';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputSubtitle = this.handleInputSubtitle.bind(this);
    this.handleImagePath = this.handleImagePath.bind(this);
    this.handleSinopse = this.handleSinopse.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleInputTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  // refatorar como função genérica(?)
  handleInputSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleSinopse(event) {
    this.setState({
      storyLine: event.target.value,
    });
  }

  handleRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  handleState = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleInputTitle } label="Título" />
          <Subtitle
            value={ subtitle }
            onChange={ this.handleInputSubtitle }
            label="Subtítulo"
          />
          <Image value={ imagePath } onChange={ this.handleImagePath } label="Imagem" />
          <Storyline
            value={ storyLine }
            onChange={ this.handleSinopse }
            label="Sinopse"
          />
          <Avaliation value={ rating } onChange={ this.handleRating } label="Avaliação" />
          <Genre value={ genre } onChange={ this.handleGenre } label="Gênero" />
          <button type="submit" data-testid="send-button" onClick={ this.handleState }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
