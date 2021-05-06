import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleText } = this.props;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          id="subtitleInput"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleText }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  handleText: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
