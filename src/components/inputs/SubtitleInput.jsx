import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ callback }
          className="form-control"
          id="subtitulo"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default SubtitleInput;
