// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  handleText = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título:
          <input
            id="titleInput"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleText }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
