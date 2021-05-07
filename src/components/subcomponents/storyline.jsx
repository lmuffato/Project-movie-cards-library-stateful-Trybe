import React from 'react';

export default class Storyline extends React.Component {
  render() {
    const {storyline, changeHandler} = this.props;
    return (
      <div>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
        </label>
        <textarea
          id="storyline"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.changeHandler }
        />
      </div>
    )
  }
}