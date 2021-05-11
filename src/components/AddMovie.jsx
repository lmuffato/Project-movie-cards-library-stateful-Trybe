import React from 'react';
// implement AddMovie component here

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
      subtitle: target.value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="text" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="text" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
