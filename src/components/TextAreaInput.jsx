import React from 'react';
/* import PropTypes from 'prop-types'; */

class TextAreaInput extends React.Component {
  render() {
    const { dataTestidLabel, nameLabel, typeInput, nameInput, dataTestid } = this.props.dataInput;
    const { handleChange, title } = this.props;

    return (
        <label htmlFor={nameInput} data-testid={dataTestidLabel}>
          {nameLabel}
          <textarea
            name={nameInput}
            data-testid={dataTestid}
            value={title}
            onChange={handleChange}
          />
        </label>
    )
  }
}

export default TextAreaInput;
