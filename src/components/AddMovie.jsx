import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    // const {
    //   onClick,
    // } = this.props;

    const { title, subtitle } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="inputTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleValue }
            data-testid="title-input"
            id="inputTitle"
          />
        </label>
        <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleValue }
            data-testid="subtitle-input"
            id="inputSubtitle"
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.string.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.string.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.string.isRequired,
// };
export default AddMovie;
