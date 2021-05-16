import React from 'react';

class InputStory extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      storyline: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      storyline: target.value,
    });
  }

  render() {
    const { storyline } = this.state;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

export default InputStory;
