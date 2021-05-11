import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputDoSubtitulo">
        Subtítulo:
        <input
          type="text"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
          id="inputDoSubtitulo"
        />
      </label>
    );
  }
}

Subtitulo.defaultProps = {
  value: '',
  onChange: '',
};

Subtitulo.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Subtitulo;
