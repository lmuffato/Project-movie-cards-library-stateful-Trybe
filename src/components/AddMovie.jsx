import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyLine: "",
      rating: 0,
      genre: "action",
    };

  }

  render(){
    const {title, subtitle, imagePath, storyLine, rating, genre } =this.state;
    return (
  <form data-testid="add-movie-form">
    <label data-testid="title-input-label" htmlFor=""> Título
      <input type="text" data-testid="title-input" value={ title } onChange={ }/>
    </label>
    <label data-testid="subtitle-input-label" htmlFor=""> Subtítulo
      <input type="text" data-testid="subtitle-input" value={ subtitle } onChange={ }/>
    </label>
    <label data-testid="image-input-label" htmlFor=""> Imagem
      <input type="text" data-testid="image-input" value={ imagePath } onChange={ }/>
    </label>
    <label data-testid="storyline-input-label" htmlFor=""> Sinopse
      <input type="textarea" data-testid="storyline-input" value={ storyLine } onChange={ }/>
    </label>
    <label data-testid="rating-input-label" htmlFor=""> Avaliação
      <input type="number" data-testid="rating-input" value={ rating } onChange={ }/>
    </label>
    <label data-testid="genre-input-label" htmlFor=""> Gênero
      <select data-testid="genre-input" value={ genre } onChange={ }>
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
    <button data-testid="send-button" onClick={}>Adicionar filme</button>
    
  </form>
    )
  }
}

AddMovie.propTypes = {
  // searchText: PropTypes.string,
}.isRequired;

export default AddMovie;
