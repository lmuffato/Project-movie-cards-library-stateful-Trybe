import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, changeValue } = this.props;
    return (
      <label htmlFor="title-input" label data-testid="title-input-label">
        Título
        <input
          onChange={ changeValue }
          value={ title }
          data-testid="title-input"
          name="title"
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Titulo;
