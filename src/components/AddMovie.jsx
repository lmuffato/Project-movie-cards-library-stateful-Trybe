// Requisito 14 completado com ajuda do Adelino Junior
// que explicou a lógica do botão para validar o evento onClick

import React from 'react';
import Title from './subcomponents/title';
import Subtitle from './subcomponents/subtitle';
import Image from './subcomponents/image';
import Storyline from './subcomponents/storyline';
import Rating from './subcomponents/rating';
import Genre from './subcomponents/genre';
import Proptypes from 'prop-types';

export default class AddMovie extends React.Component {
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

  resetInputs = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addNewMovie = (ev) => {
    ev.preventDefault();
    this.resetInputs();
    const { onClick } = this.props;
    onClick();
  }

  changeHandler = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input name="title" id="title" data-testid="title-input" value={ title } onChange={ this.changeHandler } /> */}
        <Subtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input type="text" id="subtitle" name="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={ this.changeHandler }/> */}
        <Image
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input type="text" id="imagePath" name="imagePath" value={ imagePath } data-testid="image-input" onChange={ this.changeHandler }/> */}
        <Storyline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea id="storyline" name="storyline" value={ storyline } data-testid="storyline-input" onChange={ this.changeHandler }></textarea> */}
        <Rating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input type="number" id="rating" name="rating" data-testid="rating-input" value={ rating } onChange={ this.changeHandler }></input> */}
        <Genre
          genre={ genre }
          handleChange={ this.handleChange }
        />
        {/* <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select id="genre" name="genre" value={ genre } data-testid="genre-input" onChange={ this.changeHandler }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select> */}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovies.proptypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  imagePath: Proptypes.string,
  storyline: Proptypes.string,
  rating: Proptypes.number,
  genre:Proptypes.string,
  onClick: Proptypes.func,
}
