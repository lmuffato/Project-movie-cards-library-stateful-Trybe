import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="add-movie-form">
        Título
        <input
          value={ initialStateValue }
          data-testid="title-input"
          onChange={ stateHandler }
          id="add-movie-form"
          name="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  initialStateValue: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default Title;
