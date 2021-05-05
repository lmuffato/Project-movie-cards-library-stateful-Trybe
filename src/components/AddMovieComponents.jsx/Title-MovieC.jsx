import React from 'react';
import PropTypes from 'prop-types';

class TitleMovieC extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titleMovie">
        Título
        <input
          data-testid="title-input"
          id="titleMovie"
          type="text"
          value={ title }
          name="title"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleMovieC.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleMovieC;
