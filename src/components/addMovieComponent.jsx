import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieComponent extends Component {
  render() {
    const { value,
      dataTestidlabel,
      dataTestidInput,
      onChange,
      text,
      name } = this.props;
    return (
      <label data-testid={ dataTestidlabel } htmlFor="input">
        { text }
        <input
          name={ name }
          type="textarea"
          id="input"
          value={ value }
          data-testid={ dataTestidInput }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  dataTestidlabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AddMovieComponent;
