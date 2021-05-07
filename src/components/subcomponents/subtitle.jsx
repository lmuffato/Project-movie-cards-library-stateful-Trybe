import React from 'react';

export default class Subtitle extends React.Component {
  render() {
    const {subtitle, changeHandler} = this.props;
    return (
      <div>
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
        </label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.changeHandler }
        />
      </div>
    )
  }
}