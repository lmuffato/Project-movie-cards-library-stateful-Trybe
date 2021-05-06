import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataComp from './dataComp';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = { ...this.state };
  }

  handle = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  sendMovie = () => {
    const { state, props: { onClick } } = this;
    const newMovie = { ...state, bookmarked: false };
    onClick(newMovie);
    console.log(onClick);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  generateInputComponent = (n) => {
    let input = <input { ...n.input } key={ `Input-${n.input.name}` } />;
    if (n.input.type === 'textarea') {
      input = <textarea { ...n.input } key={ `Input-${n.input.name}` } />;
    }
    if (n.input.type === 'select') {
      input = (
        <select { ...n.input } key={ `Input-${n.input.name}` }>
          {n.options.map((opt, i) => (
            <option { ...opt } key={ i } onChange={ this.handle }>{opt.name}</option>
          ))}
        </select>
      );
    }
    return (
      <label htmlFor={ n.input.name } { ...n.label } key={ `label-${n.input.name}` }>
        {n.text}
        {input}
      </label>
    );
  }

  generateInputsProps = () => {
    const { labels, typeInput } = dataComp;
    const inputs = Object.keys(this.state).reduce((acc, input) => {
      const prefix = input !== 'imagePath' ? input : 'image';
      const { [input]: text } = labels;
      const type = typeInput[input];
      const { [input]: value } = this.state;
      const inputPros = {
        label: {
          'data-testid': `${prefix}-input-label`,
        },
        input: {
          name: input,
          type,
          value,
          onChange: this.handle,
          'data-testid': `${prefix}-input`,
        },
        text,
      };
      if (input === 'genre') {
        inputPros.options = dataComp.genreOptionsAdd;
      }
      acc.push(inputPros);
      return acc;
    }, []);
    return inputs;
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.generateInputsProps().map((n) => this.generateInputComponent(n))}
        <button type="reset" data-testid="send-button" onClick={ this.sendMovie }>
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
