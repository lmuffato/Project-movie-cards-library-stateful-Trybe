import React, { Component } from "react";

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange({ target }) {
    this.setState({ title: target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;
    const { state, handleChange } = this;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            value={ state.title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
