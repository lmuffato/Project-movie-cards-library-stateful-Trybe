import React from 'react';

class InputRating extends React.Component {
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
    const { rating } = this.props;
    return (
      <div>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
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
