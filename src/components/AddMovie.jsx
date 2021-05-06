// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange (event) {
    this.setState({ title: event.target.value})
      console.log(event.target.value)
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          <input
            onChange={ this.handleChange }
            id="titleInput"
            type="checkbox"
            value={ this.title }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
