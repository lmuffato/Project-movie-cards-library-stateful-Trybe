import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { changeValueByClick } = this.props;
    return (
      <button onClick={ changeValueByClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  title: PropTypes.string.isRequired,
  changeValueByClick: PropTypes.func.isRequired,
};

export default SendButton;
