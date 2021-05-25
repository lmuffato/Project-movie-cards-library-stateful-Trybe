import React from 'react';
import { string } from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.newState = this.newState.bind(this);

    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  newState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.newState }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: string,
}.isRequired;

export default AddMovie;
