import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import inputs from '../addMovieInputs';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.getStates = this.getStates.bind(this);

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

  getStates() {
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

  render() {
    // const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        {inputs.map((input) => {
          // https://stackoverflow.com/questions/35939289/how-to-destructure-into-dynamically-named-variables-in-es6
          const { [input.name]: name } = this.getStates();

          return (<Input
            key={ input.input }
            { ...input }
            value={ name }
            onChange={ this.onChangeHandle }
          />);
        })}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
