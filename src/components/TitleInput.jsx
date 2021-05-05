import React from 'react'

class TitleInput extends React.Component {
  render() {
    return (
      <label data-testid="title-input-label" htmlFor="add-movie-form">
        Título
        <input
          value={this.props.initialStateValue}
          data-testid="title-input"
          onChange= {this.props.onChange}
          id="add-movie-form"
        />
      </label>
    );
  }
}

export default TitleInput;