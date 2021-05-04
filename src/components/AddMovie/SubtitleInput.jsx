import React from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleSubValue } = this.props;
    return (
      <label htmlFor="input-sub" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="input-sub"
          name="subtitle"
          value={ subtitle }
          className="form-control"
          onChange={ handleSubValue }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleSubValue: PropTypes.func.isRequired,
};
