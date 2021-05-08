import React from 'react';
import Proptypes from 'prop-types';

class NewTextarea extends React.Component {
  fillInDataLabel(nameOfInput) {
    return `${nameOfInput}-input-label`;
  }

  fillInDataTextarea(nameOfInput) {
    return `${nameOfInput}-input`;
  }

  render() {
    const { name, value, handleChange, description } = this.props;

    return (
      <label data-testid={ this.fillInDataLabel(name) } htmlFor={ name }>
        { description }
        <textarea
          name={ name }
          id={ name }
          data-testid={ this.fillInDataTextarea(name) }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NewTextarea.propTypes = {
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  description: Proptypes.string.isRequired,
};

export default NewTextarea;
