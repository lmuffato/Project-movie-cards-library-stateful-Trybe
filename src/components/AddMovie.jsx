import React from 'react';

class App extends React.Component {
  constructor({ onClick }) {
    super(onClick);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input data-testid="title-input" onChange={ this.state.title } />

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input data-testid="subtitle-input" onChange={ this.state.subtitle } />

        <label data-testid="image-input-label">Imagem</label>
        <input data-testid="image-input" onChange={ this.state.imagePath } />

        <label data-testid="storyline-input-label">Sinopse</label>
        <input data-testid="storyline-input" onChange={ this.state.storyline } />
      </form>
    );
  }
}

export default App;
