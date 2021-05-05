import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
        Subtítulo
        <input
          value={ initialStateValue }
          data-testid="subtitle-input"
          onChange={ stateHandler }
          name="subtitle"
          id="subtitle-input-label"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  initialStateValue: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default SubtitleInput;
