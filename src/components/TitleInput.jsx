import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="preenche-form"
        >
          Título
          <input
            id="preenche-form"
            data-testid="title-input"
            name="title"
            type="text"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
TitleInput.propTypes = {
  value: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;

export default TitleInput;
