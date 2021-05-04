import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' };
  }

  render() {

    return (
      <section>
        <div>
            <label data-testid="title-input-label">Título
              <input
                data-testid="title-input"
                type="text"
                value={ this.state.title }
                onChange={ this.state.title }
              />
            </label>
        </div>
        <div>
            <label data-testid="subtitle-input-label">Subtítulo
              <input
                data-testid="subtitle-input"
                type="text"
                value={ this.state.subtitle }
                onChange={ this.state.subtitle }
              />
            </label>
        </div>
        <div>
            <label data-testid="image-input-label">Imagem
              <input
                data-testid="image-input"
                type="text"
                value={ this.state.imagePath }
                onChange={ this.state.imagePath }
              />
            </label>
        </div>
        <div>
            <label data-testid="storyline-input-label">Sinopse
              <input
                data-testid="storyline-input"
                type="textarea"
                value={ this.state.storyline }
                onChange={ this.state.storyline }
              />
            </label>
        </div>
        <div>
            <label data-testid="rating-input-label">Avaliação
              <input
                data-testid="rating-input"
                type="text"
                value={ this.state.rating }
                onChange={ this.state.rating }
              />
            </label>
        </div>

        <div>
          <label data-testid="genre-input-label">Gênero
            <select type="genre"
              data-testid="genre-input"
              value={ this.state.genre }
              onChange={ this.state.genre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </section>
    );
  }
}

export default AddMovie;
