import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    
    });
  }

  handleSubmit() {
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
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} data-testid="title-input"/>
          </label>
          
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleInputChange} data-testid="subtitle-input"/>
          </label>

          <label data-testid="image-input-label">
            Imagem
            <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.handleInputChange} data-testid="image-input"/>
          </label>

          <label data-testid="storyline-input-label">
            Sinopse
            <textarea name="storyline" value={this.state.storyline} onChange={this.handleInputChange} data-testid="storyline-input"/>
          </label>

          <label data-testid="rating-input-label">
            Avaliação
            <input type="number" name="rating" value={this.state.rating} onChange={this.handleInputChange} data-testid="rating-input"/>
          </label>

          <label data-testid="genre-input-label">
            Gênero
            <select name="genre" value={this.state.genre} onChange={this.handleInputChange} data-testid="genre-input">
              <optgroup>
                <option value="action" data-testid="genre-option">Ação</option>
                <option value="comedy" data-testid="genre-option">Comédia</option>
                <option value="thriller" data-testid="genre-option">Suspense</option>
              </optgroup>
            </select>
          </label>

          <button data-testid="send-button" onClick={this.handleSubmit}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
