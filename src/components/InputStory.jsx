import React from 'react';

class InputStory extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { onChangeAM } = this.props;
    onChangeAM(value, name);
  }

  render() {
    const { storyline } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            name="storyline"
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
