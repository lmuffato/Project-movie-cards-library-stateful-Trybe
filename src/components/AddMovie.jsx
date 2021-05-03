import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);
    this.submitBtn = this.submitBtn.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handler({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value
    }));
  }

  submitBtn(event) {
    event.preventDefault();
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props;

    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ this.handler }
            value={ this.state.title }
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ this.state.subtitle }
            onChange={ this.handler }
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={ this.state.imagePath }
            onChange={ this.handler }
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <input
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={ this.state.storyline }
            onChange={ this.handler }
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ this.state.rating }  
            // onChange={ (event) => this.setState({rating: event.target.value}) }
            onChange={ this.handler }
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ this.state.genre }
            name="genre"
            onChange={ this.handler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button onClick={ this.submitBtn } data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
