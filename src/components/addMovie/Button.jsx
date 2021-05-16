import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { functionClick } = this.props;
    return (
      <div>
        <button
          value="Adicionar filme"
          type="submit"
          data-testid="send-button"
          onClick={ functionClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  functionClick: PropTypes.func.isRequired,
};
