import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: '',
      // genre: '',
    };
  }

  handleValue = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubValue = (event) => {
    this.setState({ subtitle: event.target.value });
  };

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="input-text"
            id="input-text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleValue }
          />
        </label>
        <label htmlFor="input-sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name=""
            id="input-sub"
            value={ subtitle }
            onChange={ this.handleSubValue }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  // PropTypes.shape(
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
  // )
};
