// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import InputsObject from '../inputsObject';

class AddMovie extends Component {
  constructor() {
    super();
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.state = initialState;
    this.addMovie = this.addMovie.bind(this);
  }

  handleValue = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
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
        <div>
          <label className="labels" data-testid="storyline-input-label" htmlFor="storyLine">
            Sinopse
            <textarea
              className="input"
              data-testid="storyline-input"
              value={ storyLine }
              name="storyLine"
              onChange={ this.handleValue }
            />
          </label>
        </div>
        <div>
          <label className="labels" htmlFor="genre" data-testid="genre-input-label">
            Gênero:
            <select
              className="input"
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
        </div>
        <Button
          dataTestid="send-button"
          text="Adicionar filme"
          onClick={ this.addMovie }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
