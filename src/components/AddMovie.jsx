import React, { Component } from 'react';
import Input from './Input';
import InputsObject from '../inputsObject';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const array = [title, subtitle, imagePath, rating, genre];
    return (
      <form data-testid="add-movie-form">
        { InputsObject.map((object, index) => (
          <Input
            key={ index }
            value={ array[index] }
            onChange={ this.handleValue }
            name={ object.name }
            text={ object.text }
            type={ object.type }
            dataTestidLabel={ object.dataTestidLabel }
            dataTestidInput={ object.dataTestidInput }
          />
        ))}
        <label data-testid="storyline-input-label" htmlFor="storyLine">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyLine }
            name="storyLine"
            onChange={ this.handleValue }
          />
        </label>
        <label htmlFor="select" data-testid="genre-input-label">
          Gênero:
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handleValue }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
