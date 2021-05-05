import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="newMovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="newMovieSubtitle"
          name="subtitle"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
