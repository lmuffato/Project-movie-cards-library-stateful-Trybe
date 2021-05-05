import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="newMovieTitle" data-testid="title-input-label">
        Título
        <input
          id="newMovieTitle"
          name="title"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
