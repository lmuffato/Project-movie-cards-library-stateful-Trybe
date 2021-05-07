import React from 'react';
import PropTypes from 'prop-types';

class InputAvaliacao extends React.Component {
  render() {
    const { onClick, handleChange } = this.props;
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
            value={ onClick }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}
InputAvaliacao.propTypes = {
  onClick: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputAvaliacao;
