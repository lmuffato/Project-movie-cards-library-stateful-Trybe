import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleState }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
