import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.changeStateValue = this.changeStateValue.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeStateValue(e, nameState) {
    this.setState({
      [nameState]: e.target.value,
    });
  }

  createInput(type, state, stateObj, name) {
    let stateValue = stateObj[state];
    let CustomTag = '';
    const tagImgLabel = 'image-input-label';
    const tagImg = 'image-input';

    if (stateValue === null) stateValue = '';

    if (type === 'textarea') {
      CustomTag = 'textarea';
    } else {
      CustomTag = 'input';
    }

    return (
      <label
        htmlFor={ state }
        data-testid={ state !== 'imagePath' ? `${state}-input-label` : tagImgLabel }
      >
        {name}
        <CustomTag
          type={ type }
          id={ state }
          value={ stateValue }
          onChange={ (e) => this.changeStateValue(e, state) }
          data-testid={ state !== 'imagePath' ? `${state}-input` : tagImg }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        action="#"
        onSubmit={ () => { onClick(this.state); this.resetState(); } }
        data-testid="add-movie-form"
      >
        {this.createInput('text', 'title', { title }, 'Título')}
        {this.createInput('text', 'subtitle', { subtitle }, 'Subtítulo')}
        {this.createInput('text', 'imagePath', { imagePath }, 'Imagem')}
        {this.createInput('textarea', 'storyline', { storyline }, 'Sinopse')}
        {this.createInput('number', 'rating', { rating }, 'Avaliação')}
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            value={ genre }
            onChange={ (e) => this.changeStateValue(e, 'genre') }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => { onClick(this.state); this.resetState(); } }
          data-testid="send-button"
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
