import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputName extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          id="title"
          name="title"
          value={ title }
          data-testid="title-input"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputName.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
