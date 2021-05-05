import React from 'react';

class InputTitle extends React.Component {
  render() {
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="preenche-form"
        >
          Título
          <input
            id="preenche-form"
            data-testid="title-input"
            type="text"
            // value={ title }
            // onChange={ title }
          />
        </label>
      </div>
    );
  }
}

export default InputTitle;
