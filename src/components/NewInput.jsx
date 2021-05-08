import React from 'react';
import Proptypes from 'prop-types';

class NewInput extends React.Component {
  fillInDataLabel(nameOfInput) {
    return `${nameOfInput}-input-label`;
  }

  fillInDataInput(nameOfInput) {
    return `${nameOfInput}-input`;
  }

  render() {
    const { name, value, handleChange, description, type } = this.props;

    return (
      <label data-testid={ this.fillInDataLabel(name) } htmlFor={ name }>
        { description }
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid={ this.fillInDataInput(name) }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NewInput.propTypes = {
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  description: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};

export default NewInput;
