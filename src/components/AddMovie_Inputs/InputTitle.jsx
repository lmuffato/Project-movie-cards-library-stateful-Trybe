import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="idTitle" data-testid="title-input-label">
        Título
        <input
          id="idTitle"
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputTitle;
