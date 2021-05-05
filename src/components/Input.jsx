import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { tipo, texto, nome, value, onChange, labelData, inputData } = this.props;
    return (
      <label
        data-testid={ labelData }
        htmlFor={ nome }
        className="label"
      >
        {texto}
        <input
          type={ tipo }
          name={ nome }
          id={ nome }
          value={ value }
          onChange={ onChange }
          data-testid={ inputData }
          className="input"
        />
      </label>
    );
  }
}

Input.propTypes = {
  tipo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  labelData: PropTypes.string.isRequired,
  inputData: PropTypes.string.isRequired,
};

export default Input;
