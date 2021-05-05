// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import dataInputs from '../dataInputs';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import SelectInput from './SelectInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendMovie = this.sendMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  sendMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TextInput
            dataInput={ dataInputs.titleInput }
            title={ title }
            handleChange={ this.handleChange }
          />
          <TextInput
            dataInput={ dataInputs.subtitleInput }
            title={ subtitle }
            handleChange={ this.handleChange }
          />
          <TextInput
            dataInput={ dataInputs.imageInput }
            title={ imagePath }
            handleChange={ this.handleChange }
          />
          <TextAreaInput
            dataInput={ dataInputs.storylineInput }
            title={ storyline }
            handleChange={ this.handleChange }
          />
          <TextInput
            dataInput={ dataInputs.ratingInput }
            title={ rating }
            handleChange={ this.handleChange }
          />
          <SelectInput
            dataInput={ dataInputs.genreInput }
            title={ genre }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.sendMovie }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
