import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { dataInput } = this.props;
    const { dataTestidLabel, nameLabel, typeInput, nameInput, dataTestid } = dataInput;
    const { handleChange, title } = this.props;

    return (
      <label htmlFor={ nameInput } data-testid={ dataTestidLabel }>
        {nameLabel }
        <input
          type={ typeInput }
          name={ nameInput }
          data-testid={ dataTestid }
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  dataInput: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextInput;
