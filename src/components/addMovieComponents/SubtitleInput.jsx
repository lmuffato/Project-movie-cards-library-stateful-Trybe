import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { inputValue, handle } = this.props;
    return (
      <div>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            onChange={ handle }
            data-testid="subtitle-input"
            name="subtitle"
            value={ inputValue }
            id="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SubtitleInput;
