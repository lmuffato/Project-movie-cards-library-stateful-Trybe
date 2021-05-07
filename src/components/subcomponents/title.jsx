import React from 'react';

export default class Title extends React.Component {
  render() {
    const {title, changeHandler} = this.props;
    return (
      <div>
        <label
          htmlFor="title" 
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          name="title" 
          id="title" 
          data-testid="title-input" 
          value={ title } 
          onChange={ this.changeHandler } />
      </div>
    )
  }
}