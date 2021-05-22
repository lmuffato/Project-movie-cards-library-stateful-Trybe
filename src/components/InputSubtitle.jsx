import React from 'react';

class InputSubtitle extends React.Component {
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
    const { subtitle } = this.props;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
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

InputSubtitle.propTypes = {
  onChangeAM: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default InputSubtitle;
