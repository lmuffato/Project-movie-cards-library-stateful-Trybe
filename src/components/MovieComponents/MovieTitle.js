import React from 'react';
import propTypes from 'prop-types';

class MovieTitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default MovieTitle;

MovieTitle.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
