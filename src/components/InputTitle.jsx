import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ value }
            onChange={ onChange }
            id="title"
            data-testid="title-input"
            type="text"
          />
        </label>
        <br />
      </div>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputTitle;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
