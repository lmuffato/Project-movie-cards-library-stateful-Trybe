import React from 'react';

class InputTitle extends React.Component {
  render() {
    const { handleAddMovie, title } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="Título">
        Título
        <input
          onChange={ handleAddMovie }
          data-testid="title-input"
          value={ title }
          type="text"
          name="title"
        />
      </label>
    );
  }
}
export default InputTitle;
