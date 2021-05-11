import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="avaliacao"
      >
        Avaliação:
        <input
          id="avaliacao"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Avaliacao.defaultProps = {
  value: 0,
  onChange: '',
};

Avaliacao.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
export default Avaliacao;
