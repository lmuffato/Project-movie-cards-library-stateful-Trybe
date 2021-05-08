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
            onChange={ this.changeHandler }
          />
        </label>
      </div>
    );
  }
}

Title.proptypes = {
  title: Proptypes.string, 
  changeHandler: Proptypes.string,
}
