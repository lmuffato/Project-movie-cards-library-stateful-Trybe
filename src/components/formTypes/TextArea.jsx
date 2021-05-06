import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { id, value, labelText, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        <textarea
          id={ id }
          name={ id }
          value={ value }
          onChange={ onChange }
          data-testid={ `${id}-input` }
        />
        { labelText }
      </label>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
