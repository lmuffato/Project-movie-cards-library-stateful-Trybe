import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieComponent extends Component {
  render() {
    const { id,
      value,
      dataTestidlabel,
      dataTestidInput,
      onChange,
      text } = this.props;
    return (
      <label data-testid={ dataTestidlabel } htmlFor={ id }>
        { text }
        <input
          type="textarea"
          id={ id }
          value={ value }
          data-testid={ dataTestidInput }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  dataTestidInput: PropTypes.string.isRequired,
  dataTestidlabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AddMovieComponent;
