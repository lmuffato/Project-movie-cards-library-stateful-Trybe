import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="inputDoTitulo">
        Título:
        <input
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
          id="inputDoTitulo"
        />
      </label>
    );
  }
}

Titulo.defaultProps = {
  value: '',
  onChange: '',
};

Titulo.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Titulo;
