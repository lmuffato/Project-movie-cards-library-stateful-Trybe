// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };
  }

  handleText = (event) => {
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { title, subtitle } = this.state;
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
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            id="subtitleInput"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleText }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
