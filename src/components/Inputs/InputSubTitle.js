import React from 'react';

class InputSubTitle extends React.Component {
  render() {
    const { handleAddMovie, subtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="Subtítulo">
        Subtítulo
        <input
          onChange={ handleAddMovie }
          data-testid="subtitle-input"
          value={ subtitle }
          type="text"
          name="subtitle"
        />
      </label>
    );
  }
}
export default InputSubTitle;
