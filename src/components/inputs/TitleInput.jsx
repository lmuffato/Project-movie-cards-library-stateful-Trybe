import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ callback }
          className="form-control"
          id="titulo"
        />
      </label>
    );
  }
}

TitleInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default TitleInput;
