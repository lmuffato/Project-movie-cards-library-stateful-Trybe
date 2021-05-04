// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
    //  subtitle: '',
      title: '',
    //  imagePath: '',
    //  storyline: '',
    //  rating: 0,
    //  genre: 'action',
    };
  }

  submeterForms = (event) => {
  //  this.setState({ subtitle: event.target.value });
    event.prevenDefault();
  }

  atualizaEstado = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.submeterForms }>
        <label htmlFor="text-in" data-testid="title-input-label">
          Título
          <input
            id="text-in"
            value={ title }
            onChange={ this.atualizaEstado }
            data-testid="title-input"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
