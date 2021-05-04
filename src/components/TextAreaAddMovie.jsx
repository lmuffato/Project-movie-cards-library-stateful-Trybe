import React from 'react';
import PropTypes from 'prop-types';

class TextAreaAddMovie extends React.Component {
  render() {
    const {
      testIdLabel,
      testIdInput,
      label,
      tAreaValue,
      handle,
      tAreaName,
    } = this.props;
    return (
      <div>
        <label
          htmlFor={ testIdInput }
          data-testid={ testIdLabel }
        >
          { label }
          <textarea
            onChange={ handle }
            data-testid={ testIdInput }
            name={ tAreaName }
            value={ tAreaValue }
            id={ testIdInput }
          />
        </label>
      </div>
    );
  }
}

TextAreaAddMovie.propTypes = {
  testIdInput: PropTypes.string.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  tAreaValue: PropTypes.func.isRequired,
  tAreaName: PropTypes.func.isRequired,
};

export default TextAreaAddMovie;
