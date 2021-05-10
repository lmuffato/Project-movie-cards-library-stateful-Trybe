import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ value }
            onChange={ onChange }
            id="subtitle"
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <br />
      </div>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputSubtitle;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
