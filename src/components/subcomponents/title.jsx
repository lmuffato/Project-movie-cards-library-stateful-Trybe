import React from 'react';
import Proptypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { title, changeHandler } = this.props;
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
            value={ title }
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  title: Proptypes.string,
  changeHandler: Proptypes.string,
}.isRequired;
