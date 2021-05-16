import React from 'react';

class InputTitle extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

export default InputTitle;
