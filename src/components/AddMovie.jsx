import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.trocaTitle = this.trocaTitle.bind(this);
    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  trocaTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      title: value,
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            value={ title }
            nome="titulo"
            type="text"
            data-testid="title-input"
            onChange={ this.trocaTitle }
          />
        </label>
        subtítulo
        caminho da imagem
        sinopse
        avaliação
        gênero
      </form>
    );
  }
}

export default AddMovie;
