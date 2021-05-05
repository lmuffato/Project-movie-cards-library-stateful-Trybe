import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle-form"
        >
          Subtítulo
          <input
            id="subtitle-form"
            data-testid="subtitle-input"
            type="text"
            // value={ subtitle }
            // onChange={ subtitle }
          />
        </label>
      </div>
    );
  }
}

export default InputSubtitle;
