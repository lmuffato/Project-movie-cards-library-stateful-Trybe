import React from 'react';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
        Título
      </label>
    );
  }
}

export default Title;
