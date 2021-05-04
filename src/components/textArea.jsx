import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { labelText, nome, onChange, value } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor={ nome }
      >
        { labelText}
        <textarea
          name={ nome }
          data-testid="storyline-input"
          id={ nome }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
