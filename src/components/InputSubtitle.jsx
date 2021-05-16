import React from 'react';

class InputSubtitle extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      subtitle: target.value,
    });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

export default InputSubtitle;
