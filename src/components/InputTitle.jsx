import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
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
    const { title } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
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

InputTitle.propTypes = {
  onChangeAM: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default InputTitle;
