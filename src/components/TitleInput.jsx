import React from 'react';

class TitleInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="add-movie-form">
        Título
        <input
          value={ initialStateValue }
          data-testid="title-input"
          onChange={ stateHandler }
          id="add-movie-form"
          name="title"
        />
      </label>
    );
  }
}

export default TitleInput;
