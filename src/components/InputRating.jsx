import React from 'react';

class InputRating extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      rating: 0,
    };
  }

  handleChange({ target }) {
    this.setState({
      rating: target.value,
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

export default InputRating;
