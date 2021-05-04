import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, handleValue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          id="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleValue }
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};
