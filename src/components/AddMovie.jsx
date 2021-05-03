import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // //     imagePath: '',
      // //     storyline: '',
      // //     rating: 0,
      // //     genre: 'action',
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  handleUpdateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            type="text"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ this.handleUpdateState }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleUpdateState }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
