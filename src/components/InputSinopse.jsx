import React from 'react';

class InputSinopse extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            // value={ storyline }
            // onChange={ storyline }
          />
        </label>
      </div>
    );
  }
}

export default InputSinopse;
