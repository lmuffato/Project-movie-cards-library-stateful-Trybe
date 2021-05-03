import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    console.log(this.state);
    const { onclick } = this.props;
    const { title } = this.state;
    console.log(onclick);
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
