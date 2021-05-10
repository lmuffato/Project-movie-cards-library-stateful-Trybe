import React from 'react';
import Proptypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            id="title"
            data-testid="title-input"
            value={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  name: Proptypes.string,
  onChange: Proptypes.string,
}.isRequired;
