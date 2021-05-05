import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './AddMovieComponents/TextInput';
import TextInput2 from './AddMovieComponents/TextInput2';
import TextInput3 from './AddMovieComponents/TextInput3';
import TextArea from './AddMovieComponents/TextArea';
import NumberInput from './AddMovieComponents/NumberInput';
import SelectInput from './AddMovieComponents/SelectInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handInputs = this.handInputs.bind(this);
    this.submitInputs = this.submitInputs.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handInputs(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitInputs() {
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
      <form data-testid="add-movie-form">
        <TextInput handInputs={ this.handInputs } value={ title } />
        <TextInput2 handInputs={ this.handInputs } value={ subtitle } />
        <TextInput3 handInputs={ this.handInputs } value={ imagePath } />
        <TextArea handInputs={ this.handInputs } value={ storyline } />
        <NumberInput handInputs={ this.handInputs } value={ rating } />
        <SelectInput handInputs={ this.handInputs } value={ genre } />
        <button data-testid="send-button" type="button" onClick={ this.submitInputs }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
