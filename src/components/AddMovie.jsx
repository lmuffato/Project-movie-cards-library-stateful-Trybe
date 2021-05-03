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
      genre: '',
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
      </form>
    );
  }
}

export default AddMovie;
