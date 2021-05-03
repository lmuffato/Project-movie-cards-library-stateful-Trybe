// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label data-testid="title-input-label" htmlFor="title">Título</label>
            <input onChange={this.handleChange} data-testid="title-input" value={this.state.title} type="text" name="title" id="title"/>
          </div>
          <div>
            <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo</label>
            <input onChange={this.handleChange} data-testid="subtitle-input" value={this.state.subtitle} type="text" name="subtitle" id="subtitle"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;