import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, AddMovie } = this.props;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ AddMovie }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  AddMovie: PropTypes.func.isRequired,
};

export default Subtitle;
