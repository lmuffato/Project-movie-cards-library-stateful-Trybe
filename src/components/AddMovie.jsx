/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  atualizar = (e, key) => {
    this.setState({ [key]: (key === 'rating'
      ? parseFloat(e.target.value) : e.target.value) });
  }

  createInput = ((text, name, type, value, testLabel, testInput) => {
    const input = (
      <label htmlFor={ name } data-testid={ testLabel }>
        {text}
        <input
          data-testid={ testInput }
          type={ type }
          id={ name }
          value={ value }
          onChange={ (event) => this.atualizar(event, name) }
        />
      </label>
    );
    return input;
  });

  createTextarea = ((text, name, value, testLabel, testInput) => {
    const input = (
      <label htmlFor={ name } data-testid={ testLabel }>
        {text}
        <textarea
          data-testid={ testInput }
          id={ name }
          value={ value }
          onChange={ (event) => this.atualizar(event, name) }
        />
      </label>
    );
    return input;
  });

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          {
            this.createInput(
              'Título', 'title', 'text', title, 'title-input-label', 'title-input')
          }
          {
            this.createInput(
              'Subtítulo',
              'subtitle', 'text', subtitle, 'subtitle-input-label', 'subtitle-input')
          }
          {
            this.createInput(
              'Imagem',
              'imagePath', 'text', imagePath, 'image-input-label', 'image-input')
          }
          {this.createTextarea(
            'Sinopse',
            'storyline', storyline, 'storyline-input-label', 'storyline-input')}
          {this.createInput(
            'Avaliação',
            'rating', 'number', rating, 'rating-input-label', 'rating-input')}
          <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
          <select
            data-testid="genre-input"
            name="genre"
            id="genre"
            value={ genre }
            onChange={ (event) => this.atualizar(event, 'genre') }
          >
            {genreArray.map(({ text, value }) => (
              <option
                data-testid="genre-option"
                name="genre"
                key={ text }
                value={ value }
              >
                {text}
              </option>
            ))}
          </select>
          <button data-testid="send-button" type="button" onClick={ this.addBotao }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
