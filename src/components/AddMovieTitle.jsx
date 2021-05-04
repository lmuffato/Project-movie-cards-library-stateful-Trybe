import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title, handleInputs } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title-input"
          type="text"
          value={ title }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default Title;
