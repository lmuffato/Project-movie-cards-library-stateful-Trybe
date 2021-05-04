import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handleUpdateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handlerSubmit(callback) {
    console.log(callback);
  }

  renderInputs(name, value, type, data) {
    return (
      <input
        type={ type }
        data-testid={ data }
        id={ data }
        name={ name }
        value={ value }
        onChange={ this.handleUpdateState }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.renderInputs('title', title, 'text', 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.renderInputs('subtitle', subtitle, 'text', 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.renderInputs('imagePath', imagePath, 'text', 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.renderInputs('storyline', storyline, 'textarea', 'storyline-input') }
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          { this.renderInputs('rating', rating, 'number', 'rating-input') }
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            id="genre-input"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleUpdateState }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
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
