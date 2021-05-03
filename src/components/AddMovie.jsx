// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataInputs from '../dataInputs';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  resetStage = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    const { state } = this;
    return (
      <div>
        <form data-testid="add-movie-form">
          {dataInputs.map((dado) => (
            <Input
              key={ dado.name }
              callback={ this.handleChange }
              data={ dado }
              value={ state[dado.name] }
            />
          ))}
          <div>
            <label data-testid="storyline-input-label" htmlFor="storyline">
              Sinopse
              <textarea
                onChange={ this.handleChange }
                data-testid="storyline-input"
                value={ storyline }
                name="storyline"
              />
            </label>
          </div>
          <div>
            <label data-testid="rating-input-label" htmlFor="rating">
              Avaliação
              <input
                onChange={ this.handleChange }
                data-testid="rating-input"
                value={ rating }
                type="number"
                name="rating"
              />
            </label>
          </div>
          <Select callback={ this.handleChange } value={ genre } />
          <Button onClick={ () => { onClick(); this.resetStage(); } } />
        </form>
      </div>
    );
  }
}

Input.propType = {
  callback: PropTypes.func,
  testidLabel: PropTypes.string,
  testidInput: PropTypes.string,
  labelName: PropTypes.string,
  name: PropTypes.string,
};

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
