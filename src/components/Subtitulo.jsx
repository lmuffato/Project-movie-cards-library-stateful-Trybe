import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, changeValue } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          onChange={ changeValue }
          value={ subtitle }
          data-testid="subtitle-input"
          name="subtitle"
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Subtitulo;
