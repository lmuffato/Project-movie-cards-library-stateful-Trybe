import React from 'react';
import PropTypes from 'prop-types';

class InputAvaliacao extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating-form"
        >
          Avaliação
          <input
            id="rating-form"
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
InputAvaliacao.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputAvaliacao;
