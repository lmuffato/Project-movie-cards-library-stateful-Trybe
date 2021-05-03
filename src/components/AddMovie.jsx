import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="titulo"
            data-testid="title-input"
            value={ title }
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />
        </label>
        <label htmlFor="subTitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subTitulo"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
