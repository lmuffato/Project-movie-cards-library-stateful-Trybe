import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { inputs, selects } from '../addMovieInputs';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.submitHandle = this.submitHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.getState = this.getState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeHandle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  getState() {
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    } = this.state;

    return {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
      genre,
    };
  }

  submitHandle(event) {
    event.preventDefault();
    const { onClick } = this.props;

    onClick(this.getState());

    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        {inputs.map((input) => {
          // https://stackoverflow.com/questions/35939289/how-to-destructure-into-dynamically-named-variables-in-es6
          const { [input.name]: value } = this.getState();

          return (<Input
            key={ input.name }
            { ...input }
            value={ value }
            onChange={ this.onChangeHandle }
          />);
        })}

        {selects.map((select) => {
          const { [select.name]: value } = this.getState();

          return (
            <Select
              key={ select.text }
              { ...select }
              value={ value }
              onChange={ this.onChangeHandle }
            />
          );
        })}

        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submitHandle }
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
