import React from 'react';
import PropTypes from 'prop-types';
import Field from './formTypes/Field';

class addMovie extends React.Component {
  constructor() {
    super();
    this.state = this.defaultState();
  }

  addMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.defaultState());
  }

  updateState = (event) => {
    const { target: { name, value } } = event;
    this.setState(() => ({
      [name]: value,
    }));
  }

  getProp = (objOfProps, propid) => (
    { ...objOfProps[propid], id: propid, onChange: this.updateState }
  )

  defaultState = () => ({
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  })

  render = () => {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const genreid = 'genre-option';
    const propList = {
      title: { value: title, labelText: 'Título' },
      subtitle: { value: subtitle, labelText: 'Subtítulo' },
      image: { value: imagePath, labelText: 'Imagem' },
      storyline: { value: storyline, labelText: 'Sinopse' },
      rating: { type: 'number', value: rating, labelText: 'Avaliação' },
      genre: {
        value: genre,
        labelText: 'Gênero',
        options: [
          { id: genreid, value: 'action', text: 'Ação' },
          { id: genreid, value: 'comedy', text: 'Comédia' },
          { id: genreid, value: 'thriller', text: 'Suspense' },
        ],
      },
    };
    return (
      <form data-testid="add-movie-form">
        <Field { ...this.getProp(propList, 'title') } />
        <Field { ...this.getProp(propList, 'subtitle') } />
        <Field { ...this.getProp(propList, 'image') } />
        <Field Tag="textarea" { ...this.getProp(propList, 'storyline') } />
        <Field { ...this.getProp(propList, 'rating') } />
        <Field Tag="select" { ...this.getProp(propList, 'genre') } />
        <button type="button" onClick={ this.addMovie } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default addMovie;
