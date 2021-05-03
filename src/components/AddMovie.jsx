import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: '',
      // genre: '',
    };
  }

  handleValue = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleValue }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
};
