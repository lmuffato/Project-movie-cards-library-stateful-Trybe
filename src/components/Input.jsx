import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { tipo, texto, nome, value, onChange, labelData, inputData } = this.props;
    return (
      <label
        data-testid={ labelData }
        htmlFor={ nome }
      >
        {texto}
        <input
          type={ tipo }
          name={ nome }
          id={ nome }
          value={ value }
          onChange={ onChange }
          data-testid={ inputData }
        />
      </label>
    );
  }
}

Input.propTypes = {
  tipo: PropTypes.string,
  texto: PropTypes.string,
  nome: PropTypes.string,
  value: PropTypes.func,
  onChange: PropTypes.func,
  labelData: PropTypes.string,
  inputData: PropTypes.string,
};

export default Input;
