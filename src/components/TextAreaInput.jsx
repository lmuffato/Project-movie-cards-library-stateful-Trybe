import React from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends React.Component {
  render() {
    const { dataInput } = this.props;
    const { dataTestidLabel, nameLabel, typeInput, nameInput, dataTestid } = dataInput;
    const { handleChange, title } = this.props;

    return (
      <label htmlFor={ nameInput } data-testid={ dataTestidLabel }>
        {nameLabel }
        <input
          name={ nameInput }
          data-testid={ dataTestid }
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  dataInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextAreaInput;
