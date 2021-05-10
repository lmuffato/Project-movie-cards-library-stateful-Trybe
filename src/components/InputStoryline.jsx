import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ value }
            onChange={ onChange }
            id="storyline"
            data-testid="storyline-input"
            type="textarea"
          />
        </label>
        <br />
      </div>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputStoryline;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
