import React from 'react';

class InputsAvaliacao extends React.Component {
  render() {
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
            // value={ rating }
            // onChange={ rating }
          />
        </label>
      </div>
    );
  }
}

export default InputsAvaliacao;
