// implement AddMovie component here
import React from 'react';

const genreArray = [
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  addBotao = () => {
    this.onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  atualizar = (e, key) => {
    this.setState({ [key]: (key === 'rating'
      ? parseFloat(e.target.value) : e.target.value) });
  }

  createInput = ((text, name, type, value) => {
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type={ type }
          id={ name }
          value={ value }
          onChange={ (event) => this.atualizar(event, name) }
        />
      </label>
    );
  });

  createTextarea = ((text, name, value) => {
    return (
      <label htmlFor={ name }>
        {text}
        <textarea
          id={ name }
          value={ value }
          onChange={ (event) => this.atualizar(event, name) }
        />
      </label>
    );
  });

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state
    return (
      <div>
        <form>
          {this.createInput('Título', 'title', 'text', title)}
          {this.createInput('Subtítulo', 'subtitle', 'text', subtitle)}
          {this.createInput('Imagem', 'imagePath', 'text', imagePath)}
          {this.createTextarea('Sinopse', 'storyline', storyline)}
          {this.createInput('Avaliação', 'rating', 'number', rating)}
          <label htmlFor="genre">Gênero</label>
          <select
            name="genre"
            id="genre"
            value={ genre }
            onChange={ (event) => this.atualizar(event, 'genre') }
          >
            {genreArray.map(({ text, value }) => (
              <option key={ text } value={ value }>
                {text}
              </option>
            ))}
          </select>
          <button type="button" onClick={ this.addBotao }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
