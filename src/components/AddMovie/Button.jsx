import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ callback }) => (
  <button
    type="submit"
    data-testid="send-button"
    onClick={ callback }
    className="btn btn-success"
  >
    Adicionar filme
  </button>
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
