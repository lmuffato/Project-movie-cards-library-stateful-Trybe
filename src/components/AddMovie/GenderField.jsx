import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ value, callback }) => (
  <label htmlFor="true" data-testid="genre-input-label">
    Gênero
    <select
      name="genre"
      value={ value }
      data-testid="genre-input"
      onChange={ callback }
      className="form-select"
    >
      <option data-testid="genre-option" value="action">Ação</option>
      <option data-testid="genre-option" value="comedy">Comédia</option>
      <option data-testid="genre-option" value="thriller">Suspense</option>
    </select>
  </label>
);

Field.propTypes = PropTypes.shape({
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  data: PropTypes.string,
  callback: PropTypes.func,
}).isRequired;

export default Field;
