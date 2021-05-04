import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="idSubtitle"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputSubtitle;
