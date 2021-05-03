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
    console.log(target.value)
    this.setState({
      title: target.value
    })
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">Título</label>
          <input onChange={this.handleChange} data-testid="title-input" value={this.state.title} type="text" name="title" id="title"/>
        </form>
      </div>
    );
  }
}

export default AddMovie;